import { Flex } from "antd";

function NotFound() {
    return(
        <>
          <div 
             style={
                {
                 display: Flex,
                 height: "100vh",
                 justifyContent:"center",
                 alignItems:"center"
                }
                }>
            <h1 style={
                {
                color: "red"
                }
                }>Page Not gound (404)</h1>
          </div>
        </>
    )
}

export default NotFound;