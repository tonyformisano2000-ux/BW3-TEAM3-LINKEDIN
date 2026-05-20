import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyProfile } from "../../redux/Actions";

import ProfileHero from "./ProfileHero";
import ProfileAnalytics from "./ProfileAnalytics";
import ProfileAbout from "./ProfileAbout";
import ProfileActivity from "./ProfileActivity";
import ProfileExperience from "./ProfileExperience";
import ProfileEducation from "./ProfileEducation";
import ProfileSkills from "./ProfileSkills";
import ProfileSidebar from "./ProfileSidebar";
import { Footer } from "../Footer";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(getMyProfile());
  }, [dispatch]);

  if (loading)
    return <p className="text-center py-5">Caricamento profilo...</p>;
  if (error)
    return <p className="text-center py-5 text-danger">Errore: {error}</p>;
  if (!profile)
    return <p className="text-center py-5">Nessun profilo trovato</p>;

  return (
    <main
      className="py-4"
      style={{ backgroundColor: "#f3f2ef", minHeight: "100vh" }}
    >
      <div className="container" style={{ maxWidth: "1128px" }}>
        <div className="row g-3 align-items-start">
          {/* COLONNA SINISTRA - contenuto principale */}
          <div className="col-lg-8">
            <ProfileHero profile={profile} />
            <ProfileAnalytics />
            <ProfileAbout profile={profile} />
            <ProfileActivity profile={profile} />
            <ProfileExperience />
            <ProfileEducation />
            <ProfileSkills />
          </div>

          {/* COLONNA DESTRA - sidebar */}
          <div className="col-lg-4">
            <ProfileSidebar profile={profile} />
          </div>
        </div>
        {/* Foooooter broom broom */}
        <div className="col-lg-8 mt-4">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
