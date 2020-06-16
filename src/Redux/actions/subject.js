import agent from "app/api/agent";

export const getAllSemester = async () => {
  try {
    const data = await agent.Subject.listSemester();
    return new Promise((res, rej) => {
      res(data);
    });
  } catch (error) {}
};

export const getSubject = async (id)  => {
  try {
    const data = await agent.Subject.listSubjectBySemesterId(id);
    console.log(data);
    
    return new Promise((res) => res(data));
  } catch (error) {}
};

export const getCR = async (objFilter)  => {
  try {
    const data = await agent.Subject.listClassRoom(objFilter);
    return new Promise((res) => res(data));
  } catch (error) {}
};
