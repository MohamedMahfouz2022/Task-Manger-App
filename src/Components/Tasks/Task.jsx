import * as Icons from "react-icons/fa";
import Button from "../../UI/Button";

const Task = ({ id, numOfTask, type, task_name, content, handleDelete }) => {
  // حدد الأيقونة بناءً على النوع
  const getIconByType = (type) => {
    switch (type) {
      case "Design":
        return Icons.FaPaintBrush;
      case "Testing":
        return Icons.FaBug;
      case "Documentation":
        return Icons.FaBook;
      case "Deployment":
        return Icons.FaServer;
      case "Development":
        return Icons.FaCode;
      default:
        return null;
    }
  };
  //-------------------------------------------------------------------

  const IconComponent = getIconByType(type);
  //-------------------------------------------------------------------

  return (
    <div className="w-full h-max bg-cardBackground shadow-[-1px_-1px_5px_1px_#fff,_4px_4px_10px_2px_#0d2750] rounded-md font-bold text-xl text-colorFont p-9 space-y-3 relative overflow-hidden  transition-all">
      <div className="w-16 h-16 bg-secondaryBackground absolute right-0 top-0 rounded-bl-xl">
        <div className="w-full h-full text-2xl font-bold flex flex-col justify-center items-center">
          <p className="text-darkestText">{numOfTask}</p>
          {/* <p className="text-white">{id}</p> */}
        </div>
      </div>
      <div className="flex items-center gap-3 fill-violet-500 w-max absolute left-5 top-0">
        {type}
        {IconComponent && (
          <IconComponent style={{ fontSize: "20px", color: "#312E81" }} />
        )}
      </div>
      <h1 className="font-bold text-xl">{task_name}</h1>
      <p className="text-sm text-zinc-500 leading-6">{content}</p>
      <div
        onClick={() => {
          handleDelete(id);
        }}
      >
        <Button name={"Delete"} />
      </div>
    </div>
  );
};

export default Task;
