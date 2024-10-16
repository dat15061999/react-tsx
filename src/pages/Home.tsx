// eslint-disable-next-line import/no-unresolved
import Children1 from "@/components/Children1"
import Children2 from "@/components/Children2"
import Tabs, { DataTab } from "@/components/Tabs"
import { useNavigate } from "react-router-dom"
import Edit from "@/components/icons/edit"


const Home = ()=>{
    // const router = useNavigate()

    // function toButton(){
    //     router("/button")
    // }

    const datas:DataTab[] = [
        {
            key:"1",
            label:"Tab 1",            
            children:Children1,
        }
        ,
        {
            key:"2",
            label:"Tab 2",            
            children:Children2,
        }
        ,
        {
            key:"3",
            label:"Tab 3",            
            children:Children2,
            icon:Edit
        }
    ]

    const datas2:DataTab[] = [
        {
            key:"1",
            label:"Tab 1",            
            children:Children1,
            disabled:true
        }
        ,
        {
            key:"2",
            label:"Tab 2",            
            children:Children2,
            disabled:true
        }
        ,
        {
            key:"3",
            label:"Tab 3",            
            children:Children2,
            icon:Edit,
            disabled:true
        }
    ]

    return (
        <div className="container mx-auto">
            <Tabs
                datas={datas}
                defaultActiveKey="2"    
            />
            <Tabs
                datas={datas}
                defaultActiveKey="1"
                border
            />
            <Tabs
                datas={datas2}
                border
            />
        </div>
    )
}

export default Home