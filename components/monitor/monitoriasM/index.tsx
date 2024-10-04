import { API_URL } from "@/app/config/constants";
import { useEffect, useState } from "react";
import Monitoria from "../monitoriaM";

interface Monitoria {
    id: number
    dia_semana: string
    horario: string
    local: string
}

export default function Monitorias(){
    const [monitorias, setMonitorias] = useState<Monitoria[]>([])

    async function loadMonitorias(){
    try{
        const resp = await fetch(`${API_URL}/monitoria/showMonitor`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            const data = await resp.json()
            if (resp.status == 200) {
                setMonitorias(data)
            }
            
        } catch(e){
            console.log("erro: ", e)
        }
    } 

    useEffect(() => {
        loadMonitorias()
    }, [])

    return(
        <>
            {monitorias.length > 0 ? (
                monitorias.map((monitoria)=> (
                <Monitoria key={monitoria.id}
                dia={monitoria.dia_semana}
                local={monitoria.local}
                horario={monitoria.horario}/> ))
            ) : (
                <Monitoria key={1}
                local={'monitorias'}
                horario={'Não há'}
                dia={''}/>
            )}
        </>
        
    )
}
