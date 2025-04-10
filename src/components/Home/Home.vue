<template>
  <main class="flex flex-col gap-15">
    <Toast />
    <section class="flex flex-col rounded justify-center items-center mt-10">
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText v-model="value1" placeholder="Procurar" />
      </IconField>

      <Carousel
        :value="products"
        :numVisible="1"
        :numScroll="1"
        circular
        :autoplayInterval="9000"
        class="w-[700px]"
      >
        <template #item="slotProps">
          <div class="shadow-xl rounded m-2 p-4">
            <div class="mb-4">
              <div class="relative mx-auto">
                <img
                  src="@/assets/imgs/image7.png"
                  class="w-full rounded h-[400px]"
                />
              </div>
            </div>
            <div class="mb-4 font-medium text-[#2f302f]">Nome Teste</div>
            <div class="flex justify-between items-center">
              <div class="mt-0 font-semibold text-xl text-[#2f302f]">
                
              </div>
            
            </div>
          </div>
        </template>
      </Carousel>
    </section>
    <section class="shadow-xl rounded w-full p-5">
      <span class="text-[#743D26] font-semibold text-xl">Recomendados:</span>
      <div class="flex flex-row gap-7 items-center mt-6 justify-center">
        <iframe width="360" height="315" src="https://www.youtube.com/embed/t0-I8t8ihr8?si=kqX_LpHomOiz7K86"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"></iframe>

      <iframe width="360" height="315" src="https://www.youtube.com/embed/Sz_vhoMc-LM?si=F1x7PTp0U2BiboXG"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"></iframe>

      <iframe width="360" height="315" src="https://www.youtube.com/embed/NrTlC_6I1ng?si=Okoni-X37-uIbj3Z"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"></iframe>
      </div>
    </section>
    <section class="shadow-xl w-full p-5 rounded flex flex-col gap-5">
      <span class="text-[#743D26] font-semibold text-xl"
        >Conheça um pouco mais do site:</span
      >
      <div class="bg-[#d6b3a4]/20 rounded p-3 mt-6 gap-3 flex flex-col">
        <p class="text-[#743D26] font-semibold">
          Música(s),  no plural! O nome desse portal expressa, primeiramente,
          que a Música se expressa de diversas formas, ou melhor, que existem
          diferentes tipos de música, e nenhuma delas é melhor, elas apenas se
          apresentam em contextos diferentes.
        </p>
        <p class="text-[#743D26] font-semibold">
          Em segundo lugar, esse nome também denota que tais músicas se fazem
          ouvir em um contexto de pluralidade. Em outras palavras, não apenas a
          Música, mas o mundo em si é plural e multifacetado.
        </p>
        <p class="text-[#743D26] font-semibold">
          Como o ensino de Música pode se constituir, respeitando as diferenças
          musicais e a própria pluralidade do mundo, das(os) docentes e das(os)
          estudantes? Como a educação musical pode se posicionar no combate aos
          preconceitos e discriminações sem, contudo, desprezar o ensino de
          conteúdos musicais?  Ajudar no entendimento dessas questões é o
          objetivo desse portal.
        </p>
      </div>

      <Button
        class="m-auto"
        :style="{
          backgroundColor: '#743D26',
          borderColor: '#743D26',
          hover: '#753D26',
        }"
        raised
        label="Continuar a aleitura"
      />
    </section>

    <section class="shadow-xl w-full p-5 rounded-xl flex flex-col gap-5">
      <span class="text-[#743D26] font-semibold text-xl">Seja Autor:</span>
      <div class="bg-[#EDEDED]/58 h-full rounded-xl flex flex-row p-5">
        <div class="flex flex-col gap-5 w-[50%]">
          <div class="flex flex-wrap gap-4">
            <div class="flex items-center gap-2 text-black font-semibold">
              <RadioButton
                v-model="ingredient"
                inputId="ingredient1"
                name="question"
                value="Cheese"
              />
              <label for="ingredient1">Pergunta</label>
            </div>
            <div class="flex items-center gap-2 text-black font-semibold">
              <RadioButton
                v-model="ingredient"
                inputId="ingredient2"
                name="project"
                value="Mushroom"
              />
              <label for="ingredient2">Projeto</label>
            </div>
          </div>
          <FloatLabel class="w-full" variant="on">
            <InputText
              id="on_name"
              class="w-full"
              v-model="value2"
              autocomplete="off"
            />
            <label for="on_name">Nome</label>
          </FloatLabel>

          <FloatLabel variant="on">
            <InputText
              id="on_email"
              class="w-full"
              v-model="value2"
              autocomplete="off"
            />
            <label for="on_email">E-mail</label>
          </FloatLabel>

          <Form
            v-slot="$form"
            :resolver="resolver"
            :initialValues="initialValues"
            @submit="onFormSubmit"
            class="flex flex-col gap-4"
          >
            <div class="flex flex-col gap-1" v-if="ingredient === 'Cheese'">
              <Textarea
                name="address"
                rows="5"
                cols="30"
                style="resize: none"
              />
              <Message
                v-if="$form.address?.invalid"
                severity="error"
                size="small"
                variant="simple"
                >{{ $form.address.error?.message }}</Message
              >
            </div>

            <FileUpload
              v-else
              name="demo[]"
              url="/api/upload"
              @upload="onTemplatedUpload($event)"
              :multiple="true"
              accept="image/*"
              :maxFileSize="1000000"
              @select="onSelectedFiles"
            >
              <template
                #header="{
                  chooseCallback,
                  uploadCallback,
                  clearCallback,
                  files,
                }"
              >
                <div
                  class="flex flex-wrap justify-between items-center flex-1 gap-4"
                >
                  <div class="flex gap-2">
                    <Button
                      @click="chooseCallback()"
                      icon="pi pi-images"
                      rounded
                      outlined
                      severity="secondary"
                    ></Button>
                    <Button
                      @click="uploadEvent(uploadCallback)"
                      icon="pi pi-cloud-upload"
                      rounded
                      outlined
                      severity="success"
                      :disabled="!files || files.length === 0"
                    ></Button>
                    <Button
                      @click="clearCallback()"
                      icon="pi pi-times"
                      rounded
                      outlined
                      severity="danger"
                      :disabled="!files || files.length === 0"
                    ></Button>
                  </div>
                  <ProgressBar
                    :value="totalSizePercent"
                    :showValue="false"
                    class="md:w-20rem h-1 w-full md:ml-auto"
                  >
                    <span class="whitespace-nowrap"
                      >{{ totalSize }}B / 1Mb</span
                    >
                  </ProgressBar>
                </div>
              </template>
              <template
                #content="{
                  files,
                  uploadedFiles,
                  removeUploadedFileCallback,
                  removeFileCallback,
                }"
              >
                <div class="flex flex-col gap-8 pt-4">
                  <div v-if="files.length > 0">
                    <h5>Pending</h5>
                    <div class="flex flex-wrap gap-4">
                      <div
                        v-for="(file, index) of files"
                        :key="file.name + file.type + file.size"
                        class="p-8 rounded-border flex flex-col border border-surface items-center gap-4"
                      >
                        <div>
                          <img
                            role="presentation"
                            :alt="file.name"
                            :src="file.objectURL"
                            width="100"
                            height="50"
                          />
                        </div>
                        <span
                          class="font-semibold text-ellipsis max-w-60 whitespace-nowrap overflow-hidden"
                          >{{ file.name }}</span
                        >
                        <div>{{ formatSize(file.size) }}</div>
                        <Badge value="Pending" severity="warn" />
                        <Button
                          icon="pi pi-times"
                          @click="
                            onRemoveTemplatingFile(
                              file,
                              removeFileCallback,
                              index
                            )
                          "
                          outlined
                          rounded
                          severity="danger"
                        />
                      </div>
                    </div>
                  </div>

                  <div v-if="uploadedFiles.length > 0">
                    <h5>Completed</h5>
                    <div class="flex flex-wrap gap-4">
                      <div
                        v-for="(file, index) of uploadedFiles"
                        :key="file.name + file.type + file.size"
                        class="p-8 rounded-border flex flex-col border border-surface items-center gap-4"
                      >
                        <div>
                          <img
                            role="presentation"
                            :alt="file.name"
                            :src="file.objectURL"
                            width="100"
                            height="50"
                          />
                        </div>
                        <span
                          class="font-semibold text-ellipsis max-w-60 whitespace-nowrap overflow-hidden"
                          >{{ file.name }}</span
                        >
                        <div>{{ formatSize(file.size) }}</div>
                        <Badge
                          value="Completed"
                          class="mt-4"
                          severity="success"
                        />
                        <Button
                          icon="pi pi-times"
                          @click="removeUploadedFileCallback(index)"
                          outlined
                          rounded
                          severity="danger"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </template>
              <template #empty>
                <div class="flex items-center justify-center flex-col">
                  <i
                    class="pi pi-cloud-upload !border-2 !rounded-full !p-8 !text-4xl !text-muted-color"
                  />
                  <p class="mt-6 mb-0">Arraste e solte arquivos aqui</p>
                </div>
              </template>
            </FileUpload>
            <Button
              type="submit"
              severity="secondary"
              :style="{
                backgroundColor: '#743D26',
                borderColor: '#743D26',
                hover: '#753D26',
                color: '#fff',
              }"
              label="Enviar Mensagem"
            />
          </Form>
        </div>
        <div class="w-[50%] flex items-center justify-center">
          <img src="@/assets/imgs/logo_name.png" alt="" />
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
import { ref } from "vue";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { useToast } from "primevue/usetoast";
import { z } from "zod";
import { usePrimeVue } from "primevue/config";
import { Form } from "@primevue/forms";

const toast = useToast();
const $primevue = usePrimeVue();

const totalSize = ref(0);
const totalSizePercent = ref(0);
const files = ref([]);

const value1 = ref(null);
const value2 = ref(null);
const ingredient = ref("Cheese");
const initialValues = ref({
  address: "",
});

const products = ref(["1", "1", "3", "3"]);

const resolver = ref(
  zodResolver(
    z.object({
      address: z.string().min(1, { message: "Address is required." }),
    })
  )
);

const onFormSubmit = ({ valid }) => {
  if (valid) {
    toast.add({
      severity: "success",
      summary: "Form is submitted.",
      life: 3000,
    });
  }
};

const onRemoveTemplatingFile = (file, removeFileCallback, index) => {
  removeFileCallback(index);
  totalSize.value -= parseInt(formatSize(file.size));
  totalSizePercent.value = totalSize.value / 10;
};

const onClearTemplatingUpload = (clear) => {
  clear();
  totalSize.value = 0;
  totalSizePercent.value = 0;
};

const onSelectedFiles = (event) => {
  files.value = event.files;
  files.value.forEach((file) => {
    totalSize.value += parseInt(formatSize(file.size));
  });
};

const uploadEvent = (callback) => {
  totalSizePercent.value = totalSize.value / 10;
  callback();
};

const onTemplatedUpload = () => {
  toast.add({
    severity: "info",
    summary: "Success",
    detail: "File Uploaded",
    life: 3000,
  });
};

const formatSize = (bytes) => {
  const k = 1024;
  const dm = 3;
  const sizes = $primevue.config.locale.fileSizeTypes;

  if (bytes === 0) {
    return `0 ${sizes[0]}`;
  }

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

  return `${formattedSize} ${sizes[i]}`;
};
</script>
