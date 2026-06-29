<script setup lang="ts">
useSeoMeta({
  title: 'My Account - Verified Peptides',
  robots: 'noindex, nofollow'
})

// const form = reactive({
//   username: '',
//   password: '',
//   remember: false
// })

const newsletterEmail = ref('')
// const status = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')
const newsletterStatus = ref<'idle' | 'success'>('idle')

// const submitLogin = () => {
//   status.value = 'submitting'

//   if (!form.username || !form.password) {
//     status.value = 'error'
//     return
//   }

//   status.value = 'success'
// }

const submitNewsletter = () => {
  if (!newsletterEmail.value) return
  newsletterStatus.value = 'success'
}

useReveal()
</script>

<template>
  <div class="bg-white">
    <!-- <main id="main" class="page-wrapper">
      <div id="content" class="content-area mx-auto max-w-[1080px] px-4 py-9 sm:px-6 lg:px-8" role="main">
        <div class="row-main">
          <div class="large-12 col">
            <div class="col-inner">
              <div class="section-title-container mb-4 flex items-center gap-4">
                <b class="h-px flex-1 bg-line" aria-hidden="true" />
                <h3 class="section-title-main text-[22px] font-medium text-ink-900">User Login</h3>
                <b class="h-px flex-1 bg-line" aria-hidden="true" />
              </div>

              <div id="text-2889928854" class="text mb-5 text-[16px] leading-7 text-ink-800">
                <p>Please log in or create an account to make a purchase.</p>
              </div>

              <div id="user-registration" class="user-registration reveal">
                <div id="ur-frontend-form" class="ur-frontend-form login max-w-[620px]">
                  <form class="user-registration-form user-registration-form-login login" method="post" @submit.prevent="submitLogin">
                    <div class="ur-form-row">
                      <div class="ur-form-grid space-y-5">
                        <div class="user-registration-form-row user-registration-form-row--wide form-row form-row-wide" data-field="username">
                          <label for="username" class="mb-2 block text-[15px] font-medium text-ink-900">
                            Username or Email <span class="required text-red-700">*</span>
                          </label>
                          <span class="input-wrapper block">
                            <input
                              id="username"
                              v-model="form.username"
                              class="user-registration-Input user-registration-Input--text input-text h-11 w-full border border-[#ddd] bg-white px-3 text-[15px] outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-600/15"
                              type="text"
                              name="username"
                              autocomplete="username"
                            >
                          </span>
                        </div>

                        <div class="user-registration-form-row user-registration-form-row--wide form-row form-row-wide" data-field="password">
                          <label for="password" class="mb-2 block text-[15px] font-medium text-ink-900">
                            Password <span class="required text-red-700">*</span>
                          </label>
                          <span class="input-wrapper block">
                            <span class="password-input-group block">
                              <input
                                id="password"
                                v-model="form.password"
                                class="user-registration-Input user-registration-Input--text input-text h-11 w-full border border-[#ddd] bg-white px-3 text-[15px] outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-600/15"
                                type="password"
                                name="password"
                                autocomplete="current-password"
                              >
                            </span>
                          </span>
                        </div>

                        <div class="form-row">
                          <div class="user-registration-before-login-btn flex flex-wrap items-center gap-x-8 gap-y-3">
                            <div data-field="remember-me">
                              <label class="user-registration-form__label user-registration-form__label-for-checkbox inline-flex items-center gap-2 text-[14px] text-ink-800">
                                <input
                                  id="rememberme"
                                  v-model="form.remember"
                                  class="user-registration-form__input user-registration-form__input-checkbox size-4 rounded border-line text-brand-600 focus:ring-brand-600"
                                  name="rememberme"
                                  type="checkbox"
                                  value="forever"
                                >
                                <span>Remember Me</span>
                              </label>
                            </div>

                            <div data-field="lost-password" class="user-registration-LostPassword lost_password">
                              <NuxtLink to="/feedback" class="text-[14px] text-brand-600 hover:underline">
                                Lost your password?
                              </NuxtLink>
                            </div>
                          </div>
                        </div>

                        <div data-field="login-button">
                          <button
                            class="user-registration-Button button ur-submit-button inline-flex min-h-10 items-center justify-center bg-brand-600 px-6 py-2 text-[13px] font-semibold uppercase text-white transition hover:bg-brand-700 disabled:opacity-60"
                            type="submit"
                            name="login"
                            value="Login"
                            :disabled="status === 'submitting'"
                          >
                            {{ status === 'submitting' ? 'Login...' : 'Login' }}
                          </button>
                        </div>

                        <p v-if="status === 'error'" class="text-sm font-semibold text-red-700">
                          Username and password are required.
                        </p>
                        <p v-if="status === 'success'" class="text-sm font-semibold text-brand-700">
                          Login form submitted.
                        </p>

                        <div class="user-registration-register register pt-1 text-[15px]" data-field="registration-setting">
                          <NuxtLink to="/contact" class="text-brand-600 hover:underline">
                            Not a member yet? Register now.
                          </NuxtLink>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main> -->

    <section id="section_1296386165" class="bg-white/85 py-40">
      <div class="section-content relative mx-auto max-w-[1080px] px-4 text-center sm:px-6 lg:px-8">
        <div class="row align-equal align-center">
          <div class="col small-12 large-12">
            <div class="col-inner text-center">
              <div id="text-2640821370" class="text reveal">
                <p class="text-[34px] font-medium uppercase leading-tight text-ink-900 sm:text-[38px]">IN THE KNOW</p>
              </div>

              <div class="mx-auto my-3 h-px max-w-[150px] bg-line" />

              <div id="text-202939131" class="text reveal">
                <p class="mx-auto max-w-3xl text-center text-[20px] leading-8 text-ink-800 sm:text-[28px]">
                  Join over 5,000 active members and get updates on new arrivals and latest lab reports.
                </p>
              </div>
            </div>
          </div>

          <div class="col small-12 large-12 mt-6">
            <div class="col-inner text-center">
              <form class="mx-auto flex max-w-[760px] flex-col gap-3 sm:flex-row" aria-label="Contact form" @submit.prevent="submitNewsletter">
                <label for="newsletter-email" class="sr-only">Email</label>
                <input
                  id="newsletter-email"
                  v-model="newsletterEmail"
                  class="h-12 min-w-0 flex-1 border border-[#ddd] bg-white px-4 text-[15px] outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-600/15"
                  type="email"
                  name="your-email"
                  placeholder="Email"
                  required
                >
                <button
                  class="h-12 bg-brand-600 px-7 text-[13px] font-semibold uppercase text-white transition hover:bg-brand-700"
                  type="submit"
                >
                  Submit
                </button>
              </form>
              <p v-if="newsletterStatus === 'success'" class="mt-3 text-sm font-semibold text-brand-700">
                Thank you for subscribing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
