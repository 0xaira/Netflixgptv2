import logo from '../assets/gptlogo.png';
import profile from '../assets/profile.webp';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const BrowseHeader = () => {
    const navigate = useNavigate();
    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            navigate('/');
        }).catch((error) => {
            navigate('/error');
        });
    }

    return (
        <div className="absolute top-0 left-0 w-full px-8 py-4 z-10 flex justify-between items-center bg-gradient-to-b from-black">
            <div className="flex items-center">
                <img src={logo} alt="" className="w-44" />
            </div>

            <div className="flex items-center">
                <div className="mr-6">
                    <img src={profile} className="w-12 h-12 " alt="" />
                </div>
                <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
            </div>
        </div>
    );
};

export default BrowseHeader;
