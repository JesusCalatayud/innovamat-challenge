import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchResources,
  setActiveSection,
} from "../../../application/actions/resources/resourcesActions";
import { useNavigate, useParams } from "react-router-dom";
import { Header, SubHeader, Gradient } from "./resourcesPageStyledComponents";
import CardSection from "../../components/CardSection/CardSection";
import FavoritesLinkButton from "../../components/FavoritesLinkButton/FavoritesLinkButton";
import ResourcesSkeleton from "../../components/ResourcesSkeleton/ResourcesSkeleton";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Navbar from "../../components/Navbar/Navbar";
import Text from "../../components/Text/Text";

const ResourcesPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeSection = useSelector(({ resources }) => resources.activeSection);
  const resources = useSelector(({ resources }) => resources[activeSection]);
  const loading = useSelector(({ resources }) => resources.loading);
  const error = useSelector(({ resources }) => resources.error);
  const { parameter } = useParams();

  useEffect(() => {
    if (parameter === activeSection && !resources.length) {
      dispatch(fetchResources(activeSection));
    } else {
      if (parameter !== "talleres" && parameter !== "rincones") {
        navigate("/error");
      } else {
        dispatch(setActiveSection(parameter));
      }
    }
  }, [dispatch, activeSection]);

  const handleSelectNavbarOption = (activeSection) => {
    dispatch(setActiveSection(activeSection));
    navigate(`/recursos/${activeSection}`);
  };

  return (
    <div>
      <Header>
        <Navbar onSelectOption={handleSelectNavbarOption} />
        {loading ? (
          <Text bold>Cargando contenido...</Text>
        ) : (
          <SubHeader>
            {error ? (
              <ErrorMessage err={error} />
            ) : (
              <>
                <Text size="lg" color="black" bold capitalize>
                  {activeSection}
                </Text>
                <FavoritesLinkButton />
              </>
            )}
          </SubHeader>
        )}
      </Header>
      <Gradient />
      {loading ? (
        <ResourcesSkeleton />
      ) : (
        <div>
          {resources.map((resource, index) => {
            return (
              <CardSection
                key={index}
                resources={resource.resources}
                sectionName={resource.sectionName}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ResourcesPage;
