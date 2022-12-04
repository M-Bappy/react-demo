import styled from "styled-components";

const BaseButton = styled.button`
border:none;
font-size:20px ;
text-transform: uppercase;
display: inline-block;
padding:10px 25px;
`

const PrimButton = styled(BaseButton)`
    Background:red;
    color:#fff;
`

const StyledCompo = () => {
    return (
        <div>
            
            <BaseButton dark={true}> i am a button</BaseButton>
            <PrimButton dark={true}> i am a prim button</PrimButton>
        </div>
    );
};

export default StyledCompo;