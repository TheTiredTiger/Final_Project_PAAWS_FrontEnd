// Banner welcoming the user to their page

// Add scrollable sponsor section featuring the pets receiving donations for user (maybe add status label for active/inactive??)

// Add also section for adoptions with status (approved, pending, rejected)

// In case we have time, add user milestones

// Add money spent in sponserships and how much they'll spend this month

import AdoptionCard from "../components/AdoptionCard";
import SponsoredCard from "../components/SponsoredCard";

function UserProfile() {
    return ( <>
    <div className="bannerWrap">
        <img className="banner" src="https://assets.americanmeadows.com/media/wysiwyg/ami-ornamental-grass-cat-banner-desktop.jpg?quality=80&auto=webp&format=pjpg"  />
        <span className="userGreeting">
            Welcome back, (user)! <br /> 
            You have contributed (money) so far.
        </span>
    </div>

    <h4 className='userHeader'>Your sponsored pets</h4>
    <div className="scrollingWrapper">
				{[1,2,3].map((el) =>{
					return <SponsoredCard />
				})}
	</div>
    
    <h4 className='userHeader'>Your adoption processes</h4>
    <div className="scrollingWrapper">
				{[1,2,3].map((el) =>{
					return <AdoptionCard />
				})}
	</div>

    </> );
}

export default UserProfile;