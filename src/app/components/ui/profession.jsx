// import React, { useProfessions } from "../../hooks/useProfession";
import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
    getProfessionsById,
    getProfessionsLoadingStatus
} from "../../store/professions";

const Profession = ({ id }) => {
    // const { isLoading, getProfession } = useProfessions();
    const prof = useSelector(getProfessionsById(id));
    const isLoading = useSelector(getProfessionsLoadingStatus());

    // const prof = getProfession(id);
    if (!isLoading) {
        return <p>{prof.name}</p>;
    } else return "loading ...";
};
Profession.propTypes = {
    id: PropTypes.string
};
export default Profession;
