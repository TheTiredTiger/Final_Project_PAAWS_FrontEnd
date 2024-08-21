// Banner welcoming the user to their page

// Add scrollable sponsor section featuring the pets receiving donations for user (maybe add status label for active/inactive??)

// Add also section for adoptions with status (approved, pending, rejected)

// In case we have time, add user milestones

// Add money spent in sponserships and how much they'll spend this month

import AdoptionCard from "../components/AdoptionCard";
import SponsoredCard from "../components/SponsoredCard";
//Added by RM
import React, { useEffect, useState } from 'react';
import { useAPI } from '../pages/Context/Context';

//omfg You have no idea it took me like 4 hrs--- 🥲 its working
//missing check when have connections in db sponsored and adoption processes
//but data is flowing here
function UserProfile() {

    const { get_user_profile, user } = useAPI(); // Hook to get user profile
    const [sponsoredPets, setSponsoredPets] = useState([]);
    const [adoptionProcesses, setAdoptionProcesses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the  user profile data when the component mounts
        const fetchUserProfile = async () => {
            try {
                const profileData = await get_user_profile(); // Fetch profile data
                setSponsoredPets(profileData.sponsoredPets || []); // Assuming API returns sponsoredPets
                setAdoptionProcesses(profileData.adoptionProcesses || []); // Assuming API returns adoptionProcesses
            } catch (error) {
                console.error("Failed to fetch profile data:", error);
            } finally {
                setLoading(false); // Loading complete
            }
        };

        fetchUserProfile();
    }, []); // Empty dependency array means this effect runs once on mount

    // Display loading message while fetching
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="bannerWrap">
                <img className="banner" src="https://assets.americanmeadows.com/media/wysiwyg/ami-ornamental-grass-cat-banner-desktop.jpg?quality=80&auto=webp&format=pjpg" />
                <span className="userGreeting">
                    Welcome back, {user ? user.first_name : 'User'}! <br />
                    You have contributed {user ? user.total_spent : 0}€ so far. {/* //Further down the line check  currency -RM */}
                </span>
            </div>
            <h4 className='userHeader'>Your sponsored pets</h4>
            <div className="scrollingWrapper">
                {sponsoredPets.map((pet, index) => (
                    <SponsoredCard key={index} pet={pet} />
                ))}
            </div>
            <h4 className='userHeader'>Your adoption processes</h4>
            <div className="scrollingWrapper">
                {adoptionProcesses.map((process, index) => (
                    <AdoptionCard key={index} process={process} />
                ))}
            </div>
        </>
    );
}

export default UserProfile;