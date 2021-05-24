<template>
  <v-container class="mt-4">
    <v-row class="text-center"><p class="text-h4">Оформление заказа</p></v-row>
    <v-row v-if="orderProducts.length" class="justify-center">
      <v-form style="width: 80%" ref="form" v-model="valid">
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Имя"
          required
          color="accent"
        ></v-text-field>
        <v-text-field
          v-model="surname"
          :counter="20"
          :rules="surnameRules"
          label="Фамилия"
          required
          color="accent"
        ></v-text-field>

        <v-text-field
          v-model="phone"
          :rules="phoneRules"
          label="Номер телефона"
          required
          color="accent"
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
          color="accent"
        ></v-text-field>

        <v-text-field
          v-model="city"
          :counter="20"
          :rules="cityRules"
          label="Город"
          required
          color="accent"
        ></v-text-field>

        <v-text-field
          v-model="street"
          :counter="20"
          :rules="streetRules"
          label="Улица"
          required
          color="accent"
        ></v-text-field>

        <v-text-field
          v-model="house"
          :counter="5"
          :rules="houseRules"
          label="Дом, корпус"
          required
          color="accent"
        ></v-text-field>
        <v-text-field
          v-model="flat"
          :counter="4"
          :rules="flatRules"
          label="Квартира"
          required
          color="accent"
        ></v-text-field>

        <v-textarea
          outlined
          label="Пожелание к заказу"
          auto-grow
          rows="1"
          append-outer-icon="mdi-comment"
          :rules="areaRules"
          :value="area"
          v-model="area"
          counter
          color="accent"
        ></v-textarea>
        <v-card>
          <v-card-text>
            <v-list shaped>
              <v-subheader>ЗАКАЗ</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item
                  v-for="(product, index) in orderProducts"
                  :key="index"
                >
                  <v-list-item-content class="text-left">
                    <v-list-item-title
                      v-text="product.name"
                    ></v-list-item-title>

                    <v-list-item-subtitle
                      class="text--primary"
                      v-text="product.category"
                    ></v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-action class="flex-column justify-start">
                    <p>Количество: {{ product.orderCount }}</p>
                    <p>
                      Сумма: {{ product.price * product.orderCount
                      }}<v-icon small color="black" class="font-weight-bold"
                        >mdi-currency-rub</v-icon
                      >
                    </p>
                  </v-list-item-action>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <p class="text-right font-weight-bold text-h5">
              Итого: {{ orderSum }}
            </p>
          </v-card-text>
        </v-card>
        <div class="d-flex justify-end mt-8">
          <v-btn :disabled="!valid" color="success" class="mr-4" @click="order">
            заказать
          </v-btn>
        </div>
      </v-form>
    </v-row>
    <v-row v-else>
      <p>выберите товары</p>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "order",
  data: () => ({
    valid: false,
    name: "",
    nameRules: [
      (v) => !!v || "обязательное поле",
      (v) => (v && v.length <= 10) || "должно быть меньше 10 символов",
    ],
    surname: "",
    surnameRules: [
      (v) => !!v || "обязательное поле",
      (v) => (v && v.length <= 10) || "должно быть меньше 10 символов",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    phone: "",
    phoneRules: [
      (v) => !!v || "phone is required",
      (v) =>
        /^\+?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/.test(v) ||
        "phone number must be valid",
    ],
    city: "",
    cityRules: [
      (v) => !!v || "обязательное поле",
      (v) => (v && v.length <= 20) || "должно быть меньше 20 символов",
    ],
    street: "",
    streetRules: [
      (v) => !!v || "обязательное поле",
      (v) => (v && v.length <= 20) || "должно быть меньше 20 символов",
    ],
    house: "",
    houseRules: [
      (v) => !!v || "обязательное поле",
      (v) => (v && v.length <= 5) || "должно быть меньше 5 символов",
    ],
    flat: "",
    flatRules: [
      (v) => !!v || "обязательное поле",
      (v) => (v && v.length <= 4) || "должно быть меньше 4 символов",
    ],
    area: "",
    areaRules: [(v) => v.length <= 100 || "максимум 100 символов"],
  }),
  computed: {
    orderProducts: function () {
      return this.$store.state.cart.productsCart;
    },
    orderSum: function () {
      let sum = 0;
      this.orderProducts.forEach((product) => {
        sum += product.orderCount * product.price;
      });
      return sum;
    },
  },
  methods: {
    order() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        let order = {
          name: this.name,
          surname: this.surname,
          phone: this.phone,
          email: this.email,
          address: {
            city: this.city,
            street: this.street,
            house: this.house,
            flat: this.flat,
          },
          note: this.area,
          products: this.orderProducts,
          orderSum: this.orderSum,
        };
        console.log(order);

        axios({
          method: "post",
          url: "/order",
          data: order,
        })
          .then((res) => {
            this.$store.commit("CLEAR_PRODUCT_CART");
            this.$router.push("/thanks");
            console.log(res);
          })
          .catch((err) => {
            console.warn(err);
          });
      }
    },
  },
};
</script>

<style scoped></style>
