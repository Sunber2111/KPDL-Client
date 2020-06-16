import React from "react";
import { Segment, Dropdown, Button } from "semantic-ui-react";
import "./style.css";
import { useEffect } from "react";
import { getAllSemester, getSubject, getCR } from "redux/actions/subject";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDataKmean } from "redux/actions/student";

const semestersGennerate = (semesters) =>
  semesters.map((sem) => {
    return {
      key: sem.id,
      value: sem.id,
      text: sem.name,
    };
  });

const subjectGennerate = (subjects) =>
  subjects.map((sub) => {
    return {
      key: sub.id,
      value: sub.id,
      text: sub.name,
    };
  });

const classroomsGennerate = (classrooms) =>
  classrooms.map((room) => {
    return {
      key: room.id,
      value: room.id,
      text: room.identity,
    };
  });

const SelectFilter = () => {
  const dispatch = useDispatch();

  const [semesters, setSemesters] = useState([]);

  const [subjects, setSubjects] = useState([]);

  const [selection, setSelection] = useState({
    subjectId: 0,
    semesterId: 0,
  });

  const [idRoom, setIdRoom] = useState(0);

  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    getAllSemester().then((data) => {
      setSemesters(data);
    });
  }, []);

  const handleChangeSem = (s, { value }) => {
    getSubject(value).then((data) => {
      setSubjects(data);
    });
    setIdRoom(0);
    setSelection({ ...selection, semesterId: value });
  };

  const handleChangeSub = (e, { value }) => {
    getCR({ ...selection, subjectId: value }).then((data) => {
      setClassrooms(data);
    });
    setSelection({ ...selection, subjectId: value });
    setIdRoom(0);
  };

  const handleClick = (e) => {
    dispatch(getDataKmean(idRoom));
  };

  const handleChange = (e, { value }) => {
    setIdRoom(value);
  };
  return (
    <div>
      <Dropdown
        placeholder="Chọn Học Kỳ"
        selection
        className="zMax-1 mx-4"
        onChange={handleChangeSem}
        options={semestersGennerate(semesters)}
      />
      <Dropdown
        placeholder="Chọn Môn Học"
        selection
        className="zMax mx-4"
        onChange={handleChangeSub}
        options={subjectGennerate(subjects)}
      />
      <Dropdown
        placeholder="Chọn Mã Lớp"
        selection
        className="zMax mx-4 mt-3"
        onChange={handleChange}
        options={classroomsGennerate(classrooms)}
      />
      <Button
        content="Phân Tích"
        color="youtube"
        onClick={handleClick}
        disabled={idRoom === 0}
        className="mx-4 mt-3"
      />
    </div>
  );
};

export default SelectFilter;
