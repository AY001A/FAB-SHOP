import { useSelector } from "react-redux";
import { FiUser, FiMail } from "react-icons/fi";

const ProfilePage = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  return (
    <div className="container">
      {/* <div class="row mt-5">
        <div class="col-md-4 p-5" style={{ border: "1px solid black" }}>
          <div className="d-flex w-100">
            <div className="mr-5">
              <FiUser style={{ marginRight: 10 }} />
            </div>
            Profile Information
          </div>
          <div>Order History</div>
        </div>
        <div class="col-md-8">
          <div>
            lorem ipson smdlflj d fjsjfk fskjfkahjfh asjfk jsjhjsdfjh jshf js
            hfjshjhdjkvnjsd vj fjhjsjhsjkf hjkf sj fhsj hj hjfhjhjvshc
            jhjhdjhajfhasjhfj djfejkshkhajkhroahjsk fjhskjdfkdsjkfjskjfkl
            jeldkjfkldmknekshnjke v eoijfkj fvj k mvmvksmfkeovmdlkjvm sl kos
            lkjsf kldvnsidfjkmg kldgnsdfkgjsd jfkl vdfk jvj ksvnsd vnskvn snvkls
            vskvnksldjfkvn ,md cvksjnsk dnmnjdnfjnjnsvn m nfjk f fjjfthis is eh
            this is how yo go aotund atnishinp peap this is how yo go arount
            this is how you go around tarnishing peoples images lorem ipson
            smdlflj d fjsjfk fskjfkahjfh asjfk jsjhjsdfjh jshf js
            hfjshjhdjkvnjsd vj fjhjsjhsjkf hjkf sj fhsj hj hjfhjhjvshc
            jhjhdjhajfhasjhfj djfejkshkhajkhroahjsk fjhskjdfkdsjkfjskjfkl
            jeldkjfkldmknekshnjke v eoijfkj fvj k mvmvksmfkeovmdlkjvm sl kos
            lkjsf kldvnsidfjkmg kldgnsdfkgjsd jfkl vdfk jvj ksvnsd vnskvn snvkls
            vskvnksldjfkvn ,md cvksjnsk dnmnjdnfjnjnsvn m nfjk f fjjfthis is eh
            this is how yo go aotund atnishinp peap this is how yo go arount
            this is how you go around tarnishing peoples images lorem ipson
            smdlflj d fjsjfk fskjfkahjfh asjfk jsjhjsdfjh jshf js
            hfjshjhdjkvnjsd vj fjhjsjhsjkf hjkf sj fhsj hj hjfhjhjvshc
            jhjhdjhajfhasjhfj djfejkshkhajkhroahjsk fjhskjdfkdsjkfjskjfkl
            jeldkjfkldmknekshnjke v eoijfkj fvj k mvmvksmfkeovmdlkjvm sl kos
            lkjsf kldvnsidfjkmg kldgnsdfkgjsd jfkl vdfk jvj ksvnsd vnskvn snvkls
            vskvnksldjfkvn ,md cvksjnsk dnmnjdnfjnjnsvn m nfjk f fjjfthis is eh
            this is how yo go aotund atnishinp peap this is how yo go arount
            this is how you go around tarnishing peoples images lorem ipson
            smdlflj d fjsjfk fskjfkahjfh asjfk jsjhjsdfjh jshf js
            hfjshjhdjkvnjsd vj fjhjsjhsjkf hjkf sj fhsj hj hjfhjhjvshc
            jhjhdjhajfhasjhfj djfejkshkhajkhroahjsk fjhskjdfkdsjkfjskjfkl
            jeldkjfkldmknekshnjke v eoijfkj fvj k mvmvksmfkeovmdlkjvm sl kos
            lkjsf kldvnsidfjkmg kldgnsdfkgjsd jfkl vdfk jvj ksvnsd vnskvn snvkls
            vskvnksldjfkvn ,md cvksjnsk dnmnjdnfjnjnsvn m nfjk f fjjfthis is eh
            this is how yo go aotund atnishinp peap this is how yo go arount
            this is how you go around tarnishing peoples images lorem ipson
            smdlflj d fjsjfk fskjfkahjfh asjfk jsjhjsdfjh jshf js
            hfjshjhdjkvnjsd vj fjhjsjhsjkf hjkf sj fhsj hj hjfhjhjvshc
            jhjhdjhajfhasjhfj djfejkshkhajkhroahjsk fjhskjdfkdsjkfjskjfkl
            jeldkjfkldmknekshnjke v eoijfkj fvj k mvmvksmfkeovmdlkjvm sl kos
            lkjsf kldvnsidfjkmg kldgnsdfkgjsd jfkl vdfk jvj ksvnsd vnskvn snvkls
            vskvnksldjfkvn ,md cvksjnsk dnmnjdnfjnjnsvn m nfjk f fjjfthis is eh
            this is how yo go aotund atnishinp peap this is how yo go arount
            this is how you go around tarnishing peoples images lorem ipson
            smdlflj d fjsjfk fskjfkahjfh asjfk jsjhjsdfjh jshf js
            hfjshjhdjkvnjsd vj fjhjsjhsjkf hjkf sj fhsj hj hjfhjhjvshc
            jhjhdjhajfhasjhfj djfejkshkhajkhroahjsk fjhskjdfkdsjkfjskjfkl
            jeldkjfkldmknekshnjke v eoijfkj fvj k mvmvksmfkeovmdlkjvm sl kos
            lkjsf kldvnsidfjkmg kldgnsdfkgjsd jfkl vdfk jvj ksvnsd vnskvn snvkls
            vskvnksldjfkvn ,md cvksjnsk dnmnjdnfjnjnsvn m nfjk f fjjfthis is eh
            this is how yo go aotund atnishinp peap this is how yo go arount
            this is how you go around tarnishing peoples images lorem ipson
            smdlflj d fjsjfk fskjfkahjfh asjfk jsjhjsdfjh jshf js
            hfjshjhdjkvnjsd vj fjhjsjhsjkf hjkf sj fhsj hj hjfhjhjvshc
            jhjhdjhajfhasjhfj djfejkshkhajkhroahjsk fjhskjdfkdsjkfjskjfkl
            jeldkjfkldmknekshnjke v eoijfkj fvj k mvmvksmfkeovmdlkjvm sl kos
            lkjsf kldvnsidfjkmg kldgnsdfkgjsd jfkl vdfk jvj ksvnsd vnskvn snvkls
            vskvnksldjfkvn ,md cvksjnsk dnmnjdnfjnjnsvn m nfjk f fjjfthis is eh
            this is how yo go aotund atnishinp peap this is how yo go arount
            this is how you go around tarnishing peoples images lorem ipson
            smdlflj d fjsjfk fskjfkahjfh asjfk jsjhjsdfjh jshf js
            hfjshjhdjkvnjsd vj fjhjsjhsjkf hjkf sj fhsj hj hjfhjhjvshc
            jhjhdjhajfhasjhfj djfejkshkhajkhroahjsk fjhskjdfkdsjkfjskjfkl
            jeldkjfkldmknekshnjke v eoijfkj fvj k mvmvksmfkeovmdlkjvm sl kos
            lkjsf kldvnsidfjkmg kldgnsdfkgjsd jfkl vdfk jvj ksvnsd vnskvn snvkls
            vskvnksldjfkvn ,md cvksjnsk dnmnjdnfjnjnsvn m nfjk f fjjfthis is eh
            this is how yo go aotund atnishinp peap this is how yo go arount
            this is how you go around tarnishing peoples images lorem ipson
            smdlflj d fjsjfk fskjfkahjfh asjfk jsjhjsdfjh jshf js
            hfjshjhdjkvnjsd vj fjhjsjhsjkf hjkf sj fhsj hj hjfhjhjvshc
            jhjhdjhajfhasjhfj djfejkshkhajkhroahjsk fjhskjdfkdsjkfjskjfkl
            jeldkjfkldmknekshnjke v eoijfkj fvj k mvmvksmfkeovmdlkjvm sl kos
            lkjsf kldvnsidfjkmg kldgnsdfkgjsd jfkl vdfk jvj ksvnsd vnskvn snvkls
            vskvnksldjfkvn ,md cvksjnsk dnmnjdnfjnjnsvn m nfjk f fjjfthis is eh
            this is how yo go aotund atnishinp peap this is how yo go arount
            this is how you go around tarnishing peoples images
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProfilePage;
