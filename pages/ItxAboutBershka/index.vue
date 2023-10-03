<script setup>
import { ref } from 'vue';
import Topbar from '@/components/Topbar/index.vue';
import AboutBershka from '~/components/AboutBershkaCard/Mobile';
import Marquee from '@/components/Marquee/index.vue';

const sectionSelectedIdx = ref(-1);
const isMainContentVisible = ref(true);
const isFormDisplayed = ref(false);

function onSectionSelected (idx) {
    console.log(idx);
    const refKey = `about-bershka-${sectionSelectedIdx.value}`;
    sectionSelectedIdx.value = idx;
    if (sectionSelectedIdx.value === -1) {
        const element = document.getElementById(refKey);
        if (element) {
            nextTick(() => {
                element.scrollIntoView();
            });
        }
    }
}

function visibilityChange (isVisible) {
    isMainContentVisible.value = isVisible
}

function displayForm () {
  isFormDisplayed.value = !isFormDisplayed.value;
  console.log('BUTTON', isFormDisplayed.value)
}
</script>
<template>
    <div class="about-bsk-page">
        <topbar :isSolid="!isMainContentVisible"/>
        <section class="main-content" v-observe-visibility="visibilityChange">
            <about-bershka
                id="about-bershka-0"
                :index="0"
                :info="'LA MARCA LA MARCALA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA LA MARCA'"
                :title="'LA MARCA'"
                v-if="sectionSelectedIdx === -1 || sectionSelectedIdx === 0"
                @sectionShow="onSectionSelected"
            />
            <about-bershka
                :index="1"
                :info="'CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO CONCEPTO'"
                :title="'CONCEPTO'"
                id="about-bershka-1"
                v-if="sectionSelectedIdx === -1 || sectionSelectedIdx === 1"
                @sectionShow="onSectionSelected"
            />
            <about-bershka
                :index="2"
                :info="'TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET TARGET'"
                :title="'TARGET'"
                id="about-bershka-2"
                v-if="sectionSelectedIdx === -1 || sectionSelectedIdx === 2"
                @sectionShow="onSectionSelected"
            />
            <marquee
                v-if="sectionSelectedIdx === -1"
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
          <div class="contact__form-wrapper" v-show="isFormDisplayed">
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
    .main-content {
        padding-bottom: 40px;
    }

    .offices {
        height: 110vh;
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
</style>
