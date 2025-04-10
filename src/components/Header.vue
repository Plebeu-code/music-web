<template>
  <header class="shadow-2xl w-full p-5 flex-col flex" >
    <div class="flex justify-between items-center" >
      <img class="h-[60px]" src="../assets/imgs/logo.png" alt="logo music">
      <div class="flex flex-col gap-2" >
        <div class="text-3xl font-bold flex gap-2 items-center justify-center">
          <span class="text-[#067121]" >Músicas,</span>
          <span class="text-red-500">NO PLURAL!</span>
        </div>
        <p class="text-[#743D26] w-[400px] uppercase text-lg text-center font-semibold" >Um portal de aprendizagem de música,
          Que desafia preconceitos e discriminações </p>
        </div>
        <img class="h-[60px]" src="../assets/imgs/logo-uerj.png" alt="logo UERJ">
      </div>
      <nav class="mt-5 w-full flex justify-center items-center" >
        <ul class="flex gap-5" >
          <li><router-link class="uppercase text-xs text-[#743D26] font-semibold " to="/sobre">sobre</router-link></li>
          <li><router-link class="uppercase text-xs text-[#743D26] font-semibold " to="/texto">texto</router-link></li>
          <li><router-link class="uppercase text-xs text-[#743D26] font-semibold " to="/videos">videos</router-link></li>
          <li><router-link class="uppercase text-xs text-[#743D26] font-semibold " to="/repertorio">repertorio</router-link></li>
          <li><router-link class="uppercase text-xs text-[#743D26] font-semibold " to="/">conversas</router-link></li>
          <li><router-link class="uppercase text-xs text-[#743D26] font-semibold " to="/">links</router-link></li>
          <li><router-link class="uppercase text-xs text-[#743D26] font-semibold " to="/">seja autor(a)</router-link></li>
          <li><a class="uppercase text-xs text-[#743D26] font-semibold " href="https://www.musicasnoplural.com/conversasplurais">Antigo site</a></li>
        </ul>
      </nav>
  </header>
</template>