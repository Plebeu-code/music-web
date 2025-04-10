<style scoped>
.fontcurse {
  font-family: cursive;}
</style>
<template>
  <div class="flex flex-col ">
    <div class="flex items-center justify-center border-[#743D26] border-2 mt-5 py-5">
      <h1 class="text-[#743D26] font-semibold text-[2.5rem] fontcurse tracking-widest">Texto</h1>
    </div>
    <div class="bg-[#d6b3a4]/20 rounded p-3 mt-6  flex flex-col">
      <p class="text-[#743D26] font-semibold">
        Aqui nessa seção serão disponibilizados diferentes textos que poderão nortear práticas docentes que buscam
        desafiar preconceitos e discriminações em aulas de Música.
        Os textos, apesar de serem frutos de pesquisas realizadas com rigor acadêmico, buscam ter uma linguagem
        acessível a todos os públicos.
        Fique à vontade para navegar na ordem que quiser. Não existe uma ordem correta para ler os textos, nem é
        necessário ler todos eles, somente o que lhe interessar :)
      </p>
    </div>

    <div class="  bg-[#d6b3a4]/20 grid grid-cols-2 gap-6 mt-6    ">
      <Card class="  flex justify-center align-center w-[400px] h-auto" v-for="(item, index) in card" :key="index">
        <template #content>
          <div class="flex  w-full h-full flex-row gap-2 justify-between">
            <div class="flex w-[200px] flex-col justify-between ">
              <p>
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <Button class=" m-auto" :style="{
                backgroundColor: '#743D26',
                borderColor: '#743D26',
                hover: '#753D26',
                }"
                raised label="">
                <label for="Leia">Leia mais </label>
                <span class=" pi pi-arrow-up-right"></span>
              </Button>
            </div>
            <div class="flex items-center justify-center">
              <img class="rounded h-min-[300px] w-[200px]" :src="item.image" alt="">
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
      image: 'src/assets/imgs/image7.png',
      description: 'Lorem ipsum dolor sit amet, consectetur',
    },
    {
      image: 'https://sm.ign.com/ign_br/screenshot/default/11-melhores-momentos-berserk_cggg.jpg',
      image: 'src/assets/imgs/image7.png',
      description: 'Lorem ipsum dolor sit amet, consectetur',
    },
    {
      image: 'src/assets/imgs/image7.png',
      description: 'Lorem ipsum dolor sit amet, consectetur',
    }, {
      image: 'src/assets/imgs/image7.png',
      description: 'Lorem ipsum dolor sit amet, consectetur',
    }, {
      image: 'src/assets/imgs/image7.png',
      description: 'Lorem ipsum dolor sit amet, consectetur',
    }, {
      image: 'src/assets/imgs/image7.png',
      description: 'Lorem ipsum dolor sit amet, consectetur',
    },
  ])
</script>
