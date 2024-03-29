import { TopBar } from "../components/TopBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
export function Dashboard(){
    return <>
        <TopBar/>
        <div className=" m-8">
            <Balance value={10000}/>
            <Users user={{firstName:"Aryan",lastName:"Sindhi"}}/>
        </div>
    </>
}