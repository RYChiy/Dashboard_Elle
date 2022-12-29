<template>
	<main>

		
    <div class="kursuebersicht">

      <Kurse />
    </div>
		
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

border: 4px solid #e4ebfd;
border-radius: 0px 10px 10px 0px;

overflow:scroll;
    overflow-x:hidden;
}

 </style>