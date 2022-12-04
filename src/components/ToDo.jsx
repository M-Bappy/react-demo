const allTasks = [
  {
    id: "001",
    subtitle: "subtitle",
    createdAt: "2022-11-18T04:09:08.295Z",
    tags: [
      {
        id: "tag-001",
        text: "Its done",
        icon: "t",
      },
      {
        id: "tag-002",
        text: "Its cancelled",
        icon: "x",
      },
      {
        id: "tag-003",
        text: "Its in progress",
        icon: "p",
      },
      {
        id: "tag-004",
        text: "just wrote it",
        icon: "c",
      },
    ],
    comments: [
      {
        id: "comment-id-001",
        user: {
          avatar: "xyz.com",
          name: "john doe",
          id: "001",
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molliti molestiae quas vel sint commodi repudiandae",
      },
    ],
    tasks: [
      {
        id: "task-010",
        title: "foggy",
        text: "here to clean the stress and heel kitchen",
        status: "done",
      },
      {
        id: "task-002",
        title: "foggy nelson",
        text: "here to clean the stress and heel kitchen",
        status: "cancelled",
      },
      {
        id: "task-003",
        title: "louis CK",
        text: "here to clean the stress and heel kitchen",
        status: "progress",
      },
      {
        id: "task-004",
        title: "albert",
        text: "here to clean the stress and heel kitchen",
        status: "progress",
      },
    ],
  },
  {
    id: "002",
    subtitle: "subtitle",
    createdAt: "2022-11-18T04:09:08.295Z",
    tags: [
      {
        id: "tag-001",
        text: "Its done",
        icon: "t",
      },
      {
        id: "tag-002",
        text: "Its cancelled",
        icon: "x",
      },
      {
        id: "tag-003",
        text: "Its in progress",
        icon: "p",
      },
      {
        id: "tag-004",
        text: "just wrote it",
        icon: "c",
      },
    ],
    comments: [
      {
        id: "comment-id-001",
        user: {
          avatar: "xyz.com",
          name: "john doe",
          id: "001",
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molliti molestiae quas vel sint commodi repudiandae",
      },
    ],
    tasks: [
      {
        id: "task-010",
        title: "foggy",
        text: "here to clean the stress and heel kitchen",
        status: "done",
      },
      {
        id: "task-002",
        title: "foggy nelson",
        text: "here to clean the stress and heel kitchen",
        status: "cancelled",
      },
      {
        id: "task-003",
        title: "louis CK",
        text: "here to clean the stress and heel kitchen",
        status: "progress",
      },
      {
        id: "task-004",
        title: "albert",
        text: "here to clean the stress and heel kitchen",
        status: "progress",
      },
    ],
  },
];



function getDay(dateStr) {
  const date = new Date(dateStr).getDay();
  switch (date) {
    case 0:
      return "Sunday";
    case 1:
      return "monday";
    case 2:
      return "tuesday";
    case 3:
      return "wednesday";
    case 4:
      return "thursday";
    case 5:
      return "friday";
    case 6:
      return "saturday";
    default:
      throw new Error("Invalid Date");
  }
}

function formateDate(dateStr) {
  const date = new Date(dateStr);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

const TagListItem = ({ tag }) => {
  return (
    <li>
      <small>{tag.icon}</small> {tag.text}
    </li>
  );
};

const CommentListItem = ({ comment }) => {
  return (
    <div>
      <h3>{comment.user.name}</h3>
      <p>{comment.text}</p>
    </div>
  );
};

const TaskListItem = ({ tsk }) => {
  return (
    <div key={tsk.id}>
      <h4>{tsk.title}</h4>
      <p>{tsk.text}</p>
      <span>{tsk.status}</span>
    </div>
  );
};

const DayCard = ({task}) => {
  return (
    <div>
      <h1>
        {getDay(task.createdAt)}, {formateDate(task.createdAt)}
      </h1>
      <ul>
        {task.tags.map((tag) => (
          <TagListItem key={tag.id} tag={tag} />
        ))}
      </ul>

      {task.comments.map((comment) => (
        <CommentListItem key={comment.id} comment={comment} />
      ))}

      {task.tasks.map((tsk) => (
        <TaskListItem key={tsk.id} tsk={tsk} />
      ))}
    </div>
  );
};

const ToDo = () => {
   
  return (
    allTasks.map(task => (
        <DayCard task={task} key={task.id} />
    ))
   
  )
};

export default ToDo;
