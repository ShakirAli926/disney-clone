import styled from 'styled-components';

const Home = (props) => {
    return (
        <>
         <Container>
             <h2>Home</h2>
             <h2>Home</h2>
             <h2>Home</h2>
             <h2>Home</h2>
             <h2>Home</h2>
             <h2>Home</h2>
             <h2>Home</h2>
         </Container>
        </>
    );
};

const Container = styled.div`
  position: relative;
  min-height: cal(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.2vw + 5px);
  
  &:after  {
    background: url("/images/home-background.png");
    content: '';
    position: absolute;
    inset : 0px;
    opacity: 1;
    z-index: -1;
    
}
`
export default Home;