import CardUsers from "../Components/CardUsers";
import SideBar from "../Components/SideBar";
import profile1 from '../assets/Profile1.png'
import profile2 from '../assets/Profile2.png'
import profile3 from '../assets/Profile3.png'
import profile4 from '../assets/Profile4.png'
import profile5 from '../assets/Profile5.png'

const Users = () => {
    return (
        <div className="bg-bgColor">
            <SideBar/>
        <div className='absolute w-[1136px] h-[700px] bg-white top-[100px] left-[300px]'>
            <div className="row">
                <div className="col">
                    <p className='absolute left-[40px] top-[40px]'>Users</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className='absolute left-[40px] top-[120px]'>USERNAME</p>
                </div>
                <div className="col">
                    <p className='absolute left-[400px] top-[120px]'>EMAIL</p>
                </div>
                <div className="col">
                    <p className='absolute left-[950px] top-[120px]'>ACTION</p>
                </div>
            </div>
            <div className="mt-[180px]">
                <CardUsers image={profile1} name="Alex Shatov" email="alexshatov@gmail.com"/>
            </div>
            <div className="mt-[280px]">
                <CardUsers image={profile2} name="Philip Harbach" email="philip.h@gmail.com"/>
            </div>
            <div className="mt-[380px]">
                <CardUsers image={profile3} name="Mirko Fisuk" email="mirkofisuk@gmail.com"/>
            </div>
            <div className="mt-[480px]">
                <CardUsers image={profile4} name="Olga Semklo" email="olga.s@cool.design"/>
            </div>
            <div className="mt-[580px]">
                <CardUsers image={profile5} name="Burak Long" email="longburak@gmail.com"/>
            </div>
        </div>
        </div>
    )
}

export default Users;