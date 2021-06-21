import { HomeWrapper, HomeAside, HomeMain } from "./styles";
import { Sidebar } from "./Sidebar";

export const Home = ()=>{
    return (
        <HomeWrapper>
            <HomeAside>
                <Sidebar/>
            </HomeAside>
            <HomeMain>
                Welcome
            </HomeMain>
        </HomeWrapper>
    )
}