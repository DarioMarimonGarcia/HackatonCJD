<script setup>
import { ref } from 'vue';
import Topbar from '@/components/Topbar/index.vue';
import AboutBershka from '~/components/AboutBershkaCard/Mobile';
import Marquee from '@/components/Marquee/index.vue';

const sections = ref([]);
const isMainContentVisible = ref(true);
const isFormDisplayed = ref(false);

const { data: aboutBskInfo, pending } = await useAsyncData('info', async () =>
    await $fetch('/api/aboutBskInfo')
);
function visibilityChange (isVisible) {
    isMainContentVisible.value = isVisible
}

function onSectionShow (key) {
    for (const section of sections.value) {
        const aux = JSON.parse(JSON.stringify(section));
        if (aux.sectionKey !== key) {
            section.onReset();
        }
    }
}


function displayForm () {
  isFormDisplayed.value = !isFormDisplayed.value;
  if (isFormDisplayed.value) {
    const element = document.querySelector('.contact__form-wrapper');
    if (element) {
      nextTick(() => {
        element.scrollIntoView({ behavior: "smooth" });
      });
    }
  }
}
</script>
<template>
    <div class="about-bsk-page">
        <topbar :isSolid="!isMainContentVisible"/>
        <section
            class="main-content"
            v-observe-visibility="visibilityChange"
            v-if="!pending">
            <about-bershka
                v-for="value of aboutBskInfo"
                :ref="(el) => sections.push(el)"
                :image="value.img"
                :section-key="value.key"
                :info="value.info"
                :title="value.title"
                :slogan="value.slogan"
                @sectionShow="onSectionShow"
            />
            <marquee
                :text="'BSK'"
                :isDark="true"
            />
        </section>
        <section class="offices">
            <h2 class="offices__title">OFICINAS</h2>
            <div class="offices__info-content">
                <h4>OFICINAS CENTRALES</h4>
                <div class="offices__direction-content">
                    <span class="offices__direction-text">Edificio Inditex</span>
                    <span class="offices__direction-text">Avenida de la Diputación s/n 15142 Arteixo, A Coruña</span>
                    <span class="offices__direction-text">España</span>
                </div>
                <div>
                    <ul>
                        <li>
                            <span>Albania - Tirana</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <hr class="separator"/>
        <section class="contact">
          <h2 class="contact__title">Contacto</h2>
          <div class="contact__shop-online">
            <h4>Tienda online</h4>
            <p>Desde aquí resolveremos todas las dudas que tengas sobre nuestro servicio de venta online</p>
          </div>
          <div class="contact__schedule">
            <h4>Horario</h4>
            <p>De lunes a viernes de 9:00 a 18:00</p>
          </div>
          <button class="contact__display-cta" type="button" @click="displayForm">Contáctanos</button>
          <div
            v-show="isFormDisplayed"
            class="contact__form-wrapper"
            :class="{ 'contact__form-wrapper--visible': isFormDisplayed }"
          >
            <form action="#" method="post" class="contact__form">
              <label for="nombre">Nombre:</label>
              <input class="contact__form-input" type="text" id="nombre" name="nombre" required><br><br>

              <label for="apellido">Apellido:</label>
              <input class="contact__form-input" type="text" id="apellido" name="apellido" required><br><br>

              <label for="telefono">Teléfono:</label>
              <input class="contact__form-input" type="tel" id="telefono" name="telefono" required><br><br>

              <label for="email">Email:</label>
              <input class="contact__form-input" type="email" id="email" name="email" required><br><br>

              <label for="mercado">Mercado:</label>
              <select id="mercado" name="mercado" required>
                <option value="españa">España</option>
                <option value="francia">Francia</option>
                <option value="portugal">Portugal</option>
                <option value="luxemburgo">Luxemburgo</option>
              </select><br><br>

              <label for="asunto">Asunto:</label>
              <select id="asunto" name="asunto" required>
                <option value="atencion_cliente">Atención al Cliente</option>
                <option value="devoluciones">Devoluciones</option>
              </select><br><br>

              <label for="tema">Tema:</label>
              <input class="contact__form-input" type="text" id="tema" name="tema"><br><br>

              <label for="mensaje">Mensaje:</label>
              <textarea id="mensaje" name="mensaje" rows="4" cols="50" required></textarea><br><br>

              <input class="contact__form-input" type="checkbox" id="condiciones" name="condiciones" required>
              <label for="condiciones">Acepto los términos y condiciones</label><br><br>

              <input class="contact__form-submit" type="submit" value="Enviar">
            </form>
          </div>
        </section>
    </div>
</template>
<style lang="scss">
.about-bsk-page {
    overflow-x: hidden;
    .offices {
        height: 110vh;
        padding-top: 40px;

        &__title {
            text-align: center;
            padding-bottom: 24px;
        }

        &__info-content {
            padding: 0 8px;
        }

        &__direction-content {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding-top: 8px;
        }

        &__direction-text {
            font-size: 12px;
            font-weight: 200;
        }
    }

}

.separator {
  border-top: 5px dashed black;
}

.contact {
  padding: 0 10px;
  margin-top: 10px;
  margin-bottom: 20px;

  &__title {
    text-align: center;
    padding-bottom: 24px;
  }

  &__shop-online, &__schedule {
    padding-left: 16px;
    margin-bottom: 40px;
  }

  &__display-cta, &__form-submit {
    background-color: white;
    width: 100%;
    height: 50px;
    display: block;
    border: 2px solid black;
    font-size: 18px;
    font-weight: 500;
  }

  &__form-wrapper {
    margin-top: 45px;

    &--visible {
      animation: fadeOpacity 1s;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    font-weight: 400;

    &-input {
      height: 24px;
    }
  }
}

@keyframes fadeOpacity {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
