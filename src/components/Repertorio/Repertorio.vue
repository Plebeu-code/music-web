<style scoped>
.fontcurse {
  font-family: cursive;
}
</style>
<template>
  <div class="flex flex-col ">
    <div class="flex items-center justify-center border-[#743D26] border-2 mt-5 py-5">
      <h1 class="text-[#743D26] font-semibold text-[2.5rem] fontcurse tracking-widest">Repertório</h1>
    </div>
    <div class="bg-[#d6b3a4]/20 rounded p-3 mt-6 gap-23 flex flex-col">
      <p class="text-[#743D26] font-semibold">
        Gostaria de ter uma sugestão de um repertório multicultural e/ou decolonial? Abaixo, há algumas opções :)
        Não se espante de não haver partitura. Recorde-se que tal notação musical é originada na Europa e, à princípio,
        servia para grafar, principalmente, as músicas de concerto. Todo o restante do globo sempre produziu suas
        músicas sem partitura e as perpetuou por meio da tradição oral. Incluir partituras aqui seria "ocidentalizar"
        tal repertório.
        Esse repertório deve ser tomado como um ponto de partida. De forma nenhuma ele esgota as possibilidades de se
        usar músicas de diferentes culturas e identidades em escolas e universidades.
      </p>

    </div>

    <div class="  grid grid-cols-2 gap-6 mt-6 items-center  border-[#743D26] border-2">

      <Card  class="w-[500px] h-auto  " v-for="(item, index) in card" :key="index" >
        <template #content>
          <div class="flex w-full h-full flex-row justify-between">
            <div class="flex w-[200px] flex-col justify-between ">
              <p>
                {{ item.description }}
              </p>

              <Button class="m-auto " :style="{
                backgroundColor: '#743D26',
                borderColor: '#743D26',
                hover: '#753D26',
              }" raised label="Saiba mais ">
              </Button>
            </div>
            <div class="flex items-center justify-center">
              <img class="rounded h-min-[300px] w-[200px]"
                :src="item.image" alt="">
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const card = ref(
[
  {
    image: 'https://static.wixstatic.com/media/bdb494_67ac8acf734140c0af090cf8d32354e9~mv2.png/v1/fill/w_599,h_300,al_c,lg_1,q_85,enc_avif,quality_auto/Licenciatura%20em%20M%20logo%202.png',
    description: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    image: 'https://static.wixstatic.com/media/bdb494_67ac8acf734140c0af090cf8d32354e9~mv2.png/v1/fill/w_599,h_300,al_c,lg_1,q_85,enc_avif,quality_auto/Licenciatura%20em%20M%20logo%202.png',
    description: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    image: 'https://static.wixstatic.com/media/bdb494_67ac8acf734140c0af090cf8d32354e9~mv2.png/v1/fill/w_599,h_300,al_c,lg_1,q_85,enc_avif,quality_auto/Licenciatura%20em%20M%20logo%202.png',
    description: 'Lorem ipsum dolor sit amet, consectetur',
  },{
    image: 'https://static.wixstatic.com/media/bdb494_67ac8acf734140c0af090cf8d32354e9~mv2.png/v1/fill/w_599,h_300,al_c,lg_1,q_85,enc_avif,quality_auto/Licenciatura%20em%20M%20logo%202.png',
    description: 'Lorem ipsum dolor sit amet, consectetur',
  },{
    image: 'https://static.wixstatic.com/media/bdb494_67ac8acf734140c0af090cf8d32354e9~mv2.png/v1/fill/w_599,h_300,al_c,lg_1,q_85,enc_avif,quality_auto/Licenciatura%20em%20M%20logo%202.png',
    description: 'Lorem ipsum dolor sit amet, consectetur',
  },{
    image: 'https://static.wixstatic.com/media/bdb494_67ac8acf734140c0af090cf8d32354e9~mv2.png/v1/fill/w_599,h_300,al_c,lg_1,q_85,enc_avif,quality_auto/Licenciatura%20em%20M%20logo%202.png',
    description: 'Lorem ipsum dolor sit amet, consectetur',
  },
])
</script>
