
const Input = ({type, children}) => {
    console.log(type,children);
    return (
        <li style={{listStyle:'none', display:'flex', gap: '10px',marginBottom:'20px'}}>
            <input type="checkbox" />
            <p>{children}</p>
            <button>Delete</button>
        </li>
    );

};

export default Input;