import { memo, MouseEvent, useState } from "react";

export type DataTab = {
    key:string;
    label:string;
    children:React.FC;
    icon?:React.FC;
    disabled?:boolean
}

export type AlignType = "left"|"center" | "right";

export type TabType = {
    datas:DataTab[];
    defaultActiveKey?:string;
    alignValue?:AlignType;   
    border?:boolean;
}

function Tabs(props:TabType){
    const {datas,defaultActiveKey,alignValue,border} =  props;

    const [selected,setSelected] = useState("")

    const handleSelected = (e: MouseEvent<HTMLInputElement>)=>{
        const { name} = e.currentTarget;
        setSelected(name);        
    }

    return (
        <div className="px-10 py-4">
            <div className={`flex flex-nowrap text-base ${alignValue === "center"?"justify-center": alignValue === "left" ? "justify-end" : "justify-start" }`}>
                {
                    datas.length > 0 && datas.map((item,index) => 
                        <label
                            htmlFor={item.key}
                            key={item.key}
                            className={`
                                relative py-1 px-3 mr-1  z-1 transition-all
                                ${item.icon ? "flex" : ""}
                                ${border?  `border-x-[0.5px] border-t-[0.5px] border-black/10 rounded-t-md
                                    ${!selected && Number(defaultActiveKey) === (index+1)?"bg-white text-blue-400": selected=== item.key?"bg-white text-blue-400":""}
                                    ${item.disabled? "bg-gray-200 text-black/30" :""}
                                    ${!item.disabled?"bg-gray-100 hover:text-blue-400 hover:bg-white cursor-pointer":""} : 
                                    ""}` :""}
                                ${!border?  `
                                    ${!selected && Number(defaultActiveKey) === (index+1)?"border-b-[1px] border-blue-600 text-blue-400": selected=== item.key?"border-b-[1px] border-blue-600 text-blue-400":""}
                                    ${!item.disabled?" hover:text-blue-400 cursor-pointer":""} : 
                                    ""}` :""}
                               
                                `}
                        >
                            <input
                                name={item.key}
                                type="button"
                                onClick={handleSelected}
                                className={`absolute top-0 left-0 right-0 h-full disabled:cursor-not-allowed cursor-pointer`}
                                disabled={item.disabled}
                            /> 
                            {item.icon && <span className="mr-1">{<item.icon />}</span>}
                            <span className="">{item.label}</span>
                        </label>
                    )
                }  
            </div>
            <div className="border-black/10 border-t-[1px] w-full">
                {
                    datas.length > 0 &&  datas.map((item,index)=> {
                        const ChildComponent = item.children; 

                        if (!selected && Number(defaultActiveKey) === (index+1)) {
                            return <ChildComponent key={item.key} />; 
                        }

                        if (selected && item.key === selected) {
                            return <ChildComponent key={item.key} />; 
                        }

                        return null;
                    })
                }
            </div>
        </div>
    )

}

export default Tabs