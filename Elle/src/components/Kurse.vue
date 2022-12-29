<template>
  <main>
    <div class="suche">
        <div class="custom-select" style="width:200px;">
  <select>
    <option value="0">Kurse Sortieren:</option>
    <option value="1">Audi</option>
    <option value="2">BMW</option>
    <option value="3">Citroen</option>
    <option value="4">Ford</option>
    <option value="5">Honda</option>
    <option value="6">Jaguar</option>
    <option value="7">Land Rover</option>
    <option value="8">Mercedes</option>
    <option value="9">Mini</option>
    <option value="10">Nissan</option>
    <option value="11">Toyota</option>
    <option value="12">Volvo</option>
  </select>
</div>
        <div class="custom-select" style="width:200px;">
  <select>
    <option value="0">Kurse Filtern:</option>
    <option value="1">Audi</option>
    <option value="2">BMW</option>
    <option value="3">Citroen</option>
    <option value="4">Ford</option>
    <option value="5">Honda</option>
    <option value="6">Jaguar</option>
    <option value="7">Land Rover</option>
    <option value="8">Mercedes</option>
    <option value="9">Mini</option>
    <option value="10">Nissan</option>
    <option value="11">Toyota</option>
    <option value="12">Volvo</option>
  </select>
</div>
    </div>

       
      <div class="kursuebersicht">
        <div class="title">
          <p>Grüne: RequirementsEngineering WS 22/23</p>
          <div class="content">
            <button class="button-81">Kurs verlassen</button>
          </div>
        </div>
        <div class="title">
          <p>Grüne: RequirementsEngineering WS 22/23</p>
          <div class="content">
            <button class="button-81">Kurs verlassen</button>
          </div>
        </div>
        <div class="title">
          <p>Grüne: RequirementsEngineering WS 22/23</p>
          <div class="content">
            <button class="button-81">Kurs verlassen</button>
          </div>
        </div>
        <div class="title">
          <p>Grüne: RequirementsEngineering WS 22/23</p>
          <div class="content">
            <button class="button-81">Kurs verlassen</button>
          </div>
        </div>
      </div>
    
  </main>
</template>

<script>
export default {
  name: "Kurse",
  components: {},
};
</script>

<style lang="scss">
.suche {
   margin-bottom: 20px ;
  border: 4px solid #ffffff;
  border-radius: 10px 10px 10px 10px;
  height: 80px;
  background-color: #f4f7ff;
}

.title {
  font-size: large;
  border: 4px solid #f4f7ff;
  border-radius: 10px 10px 10px 10px;
  background-color: #f4f7ff;
  color: #92c4e0;
  margin: 15px;
  height: 200px;
}

.content {
  font-size: medium;
  color: #92c4e0;
}

.button-81 {
  width: 10vh;
  background-color: rgba(102, 194, 247, 0.25);
  border: 0 solid #e2e8f0;
  border-radius: 1.5rem;
  box-sizing: border-box;
  color: #0d222a;
  cursor: pointer;
  display: inline-block;
  font-family: "Basier circle", -apple-system, system-ui, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1;
  padding: 0.8rem 0.5rem;
  text-align: center;
  text-decoration: none rgba(244, 247, 255, 255) solid;
  text-decoration-thickness: auto;
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 1px 2px rgba(118, 162, 255, 0.25);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-left: 60em;
  margin-top: 7em;
}
.button-81:hover {
  background-color: rgba(0, 159, 252, 0.25);
  color: rgb(0, 0, 0);
}
@media (min-width: 768px) {
  .button-81 {
    font-size: 0.9rem;
    padding: 0.8rem 0.5rem;
  }
}
@media (min-width: 768px) {
  .button-81 {
    font-size: 0.9rem;
    padding: 0.8rem 0.5rem;
  }
}

.kursuebersicht {
  box-sizing: border-box;

  width: 1168px;
  height: 682px;

  /* White */

  background: #ffffff;
  /* White */

  border: 4px solid #e4ebfd;
  border-radius: 0px 10px 10px 0px;

  overflow: scroll;
  overflow-x: hidden;
}


</style>
