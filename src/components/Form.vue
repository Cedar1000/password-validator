<template>
  <div id="app-div">
    <form id="appform">
      <div id="imgcircle"></div>
      <div id="input-container">
        <div>
          <input
            type="text"
            placeholder="First Name"
            v-model="firstName"
            :class="{ error: error.firstName }"
          />

          <div class="error-div" v-show="error.firstName">
            {{ error.firstName }}
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            v-model="lastName"
            :class="{ error: error.lastName }"
          />

          <div class="error-div" v-show="error.lastName">
            {{ error.lastName }}
          </div>
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            :class="{ error: error.email }"
            v-model="email"
          />

          <div class="error-div" v-show="error.email">
            {{ error.email }}
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="username"
            v-model="username"
            :class="{ error: error.username }"
          />

          <div class="error-div" v-show="error.username">
            {{ error.username }}
          </div>
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            v-model="password"
            :class="{ error: error.password }"
          />

          <div class="error-div" v-show="error.password">
            {{ error.password }}
          </div>
        </div>
        <div>
          <input
            type="password"
            placeholder="Re-enter Password"
            v-model="passwordConfirm"
            :class="{ error: error.passwordConfirm }"
          />

          <div class="error-div" v-show="error.passwordConfirm">
            {{ error.passwordConfirm }}
          </div>
        </div>
        <!-- <div>{{ result }}</div> -->
        <vue-recaptcha
          sitekey="6Ld1ILcfAAAAAL-KBn8AKb8Bp-XfR0x4QbmgR8_n"
        ></vue-recaptcha>

        <br />
        <button>submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import isUpper from '../utils/containsUpperCass';
import Validate from '../utils/validate';
import { VueRecaptcha } from 'vue-recaptcha';
export default {
  name: 'Form',
  components: { VueRecaptcha },

  data: () => ({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',

    error: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
  }),

  methods: {
    validate() {
      console.log('validate');
      // new Validate((field, value, this.error));
    },

    checkLength(field) {
      if (this[field].length > 0 && this[field].length < 8) {
        this.error[field] = 'Should be a minimum of 8 characters';
      } else {
        this.error[field] = '';
      }
      return field;
    },

    checkUpperCase(field) {
      if (!isUpper(this[field])) {
        this.error[field] = 'Must Contain An Uppercase Character';
      }
    },
  },

  watch: {
    password: function () {
      new Validate('password', this.password, this.error).checkLength();
    },

    passwordConfirm: function () {
      new Validate(
        'passwordConfirm',
        this.passwordConfirm,
        this.error
      ).passwordMatch(this.password, this.passwordConfirm);
    },
  },
};
</script>

<style scoped>
#app-div {
  background-color: white;

  width: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 7px;
  box-shadow: 20px 20px 35px #d0d0d0, -20px -20px 35px #ffffff;
}

.error {
  border: 2px solid #f80707;
}
.error-div {
  width: 100% !important;
  text-align: start;
}

#appform {
  display: flex;
}

#input-container,
#imgcircle {
  width: 50%;
  box-sizing: border-box;
}
#app > div > div {
  display: inline-block;
}

#app-div > div {
  padding: 5px 5px 5px 5px;
}
.txt {
  width: 140px;
}
#imgcircle {
  background-image: url('https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  background-position: center;
}
#btn {
  border: none;
  margin-top: 12px;
  background-color: blue;
  color: white;
  padding: 5px 25px 5px 25px;
}
#validationmessage {
  text-align: left;
  background-color: #e8e7e6;
  position: absolute;
  top: 25%;
  left: 92%;
  width: 50%;
}
.unchecked {
  font-size: 14px;
  color: red;
}
li {
  list-style-type: none;
  font-size: 13px;
  padding: 5px;
  margin: 5px;
  margin-left: 10px;
}
input {
  border: 1px solid gray;
  padding: 7px;
  border-radius: 3px;
  margin-bottom: 7px;
  margin-top: 3px;
  width: 100%;
  box-sizing: border-box;
}
input:focus {
  outline: none;
}
button {
  background-color: rgb(11, 185, 238);
  color: white;
  border: none;
  padding: 10px 30px;
}
#imgcircle + div {
  margin: auto;
  text-align: center;
  padding: 15px 30px 15px 30px;
}

@media (max-width: 600px) {
  #app-div {
    width: 85%;
  }

  #imgcircle {
    display: none;
  }

  #imgcircle + div {
    margin: inherit;
    padding: 7rem 1rem;
  }

  #input-container {
    width: 100%;
  }
}
</style>
