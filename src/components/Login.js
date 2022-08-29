import styled from "styled-components";

const Login = (props) => {
    return(
    <Container>
        <Content>
            <CTA>
                
                <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
                <SignUP>GET THE DISNEY BUNDLE</SignUP>
                <Description>
                    Get Premier Access to Raya and the Last Dragon  for an additional fee with a Disney+ subscription. As of 03/08/2022, the price of the Disney+ and the Disney Bundle will increase by $1.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
            </CTA>
            <BgImage />

            
        </Content>
    </Container>
    );
};

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;



const Content = styled.div`
margin-bottom:10vw;
width:100%;
position:relative;
min-height: 100vh;
box-sizing:border-box;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height:100%;
`;


const BgImage= styled.div`
background-image: url("/images/login-background.jpg");
z-index:-1;
height: 100%;
top:0;
left:0;
right:0;
background-position: top;
background-size: cover;
background-repeat:no-repeat;
position:absolute;
`

const CTA =styled.div`
max-width:650px;
display:flex;
flex-direction:column;
justify-content:center;
margin-top:0;
text-align:center;
margin-left:auto;
margin-right:auto;
transition-timing: ease-out;
transition-opacity:2s;
width:100%;
`

const CTALogoOne = styled.img`
margin-bottom:12px;
max-width:600px;
min-height:1px;
display:block;
width:100%;
`

const SignUP= styled.a`
font-weight: bold;
color:white;
background-color: #0063e5;
margin-bottom:12px;
width:100%;
letter-spacing: 1.5px;
font-sizing: 18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;

&:hover{
    background-color: #0483ee;
}
`

const Description = styled.p`
color: hsla(0,0%, 95.3%, 1);
font-size: 11px;
amrgin: 0 0 24px;
line-height: 1.5;
letter-spacing: 1.5px;

`

const CTALogoTwo = styled.img`
max-width: 600px;
margin-bottom:20px;
display: inline-block;
vertical-align: bottom;
width: 100%;
`
 export default Login;