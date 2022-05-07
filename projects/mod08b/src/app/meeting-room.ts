export class MeetingRoom {
    constructor(
        public id:number, 
        public name: string, 
        public size: string, 
        public projector?: boolean, 
        public TV?:boolean
    ){}
}

export const MeetingRooms: MeetingRoom[]=[
    {id:101, name:"哥多華",size:"40人", projector:true, TV:true},
    {id:102, name:"馬德里",size:"15人", projector:false, TV:true},
    {id:103, name:"維也納",size:"10人", projector:true, TV:false},
    {id:104, name:"巴塞隆納",size:"30人", projector:false, TV:true},
    {id:105, name:"布拉格",size:"20人", projector:false, TV:true},
]