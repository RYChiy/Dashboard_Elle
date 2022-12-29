<template>
	<main>



    <Kurse/>

  </main>


</template>
 
 <script >
import Kurse from "../components/Kurse.vue"

export default {
  
  name: "HomePage",
  components: {
    Kurse
  }}
 </script>
 
 <style lang="scss">
 
.kursuebersicht{

  box-sizing: border-box;


width: 1168px;
height: 682px;



/* White */

background: #FFFFFF;
/* White */

border: 4px  ;
border-radius: 0px 10px 10px 0px;


}

 </style>