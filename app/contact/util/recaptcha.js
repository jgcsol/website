/**
 * Load Google reCAPTCHA v3 script dynamically
 * @param {string} siteKey - Your public site key
 * @returns {Promise} resolves when grecaptcha is ready
 */
export function loadReCaptcha(siteKey) {
  return new Promise((resolve, reject) => {
    if (window.grecaptcha) {
      return resolve(window.grecaptcha);
    }

    if (!siteKey) {
      reject(new Error("Site key is required for reCAPTCHA"));
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (window.grecaptcha) {
        resolve(window.grecaptcha);
      } else {
        reject(new Error("Failed to load grecaptcha"));
      }
    };

    script.onerror = () => reject(new Error("Failed to load reCAPTCHA script"));

    document.head.appendChild(script);
  });
}

/**
 * Generate a reCAPTCHA token
 * @param {string} siteKey - Your public site key
 * @param {string} action - Action name for v3
 * @returns {Promise<string>} resolves with the token
 */
export async function getReCaptchaToken(siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, action = "contact") {
  if (!siteKey) throw new Error("Missing reCAPTCHA site key");

  const grecaptcha = await loadReCaptcha(siteKey);

  return new Promise((resolve, reject) => {
    grecaptcha.ready(() => {
      grecaptcha.execute(siteKey, { action })
        .then(resolve)
        .catch(reject);
    });
  });
}

/**
 * Example: automatically refresh token every 2 minutes
 * @param {string} siteKey
 * @param {string} action
 * @param {(token:string)=>void} callback - called whenever a new token is generated
 * @returns {() => void} - cleanup function to stop the interval
 */
export function reCaptcha(action, callback) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!siteKey) {
    console.error("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set");
    return () => { };
  }
  const generateToken = async () => {
    try {
      const token = await getReCaptchaToken(siteKey, action);
      callback(token);
      console.log("reCAPTCHA token generated:");
    } catch (err) {
      console.error("Error generating reCAPTCHA token:", err);
    }
  };

  // Generate immediately
  generateToken();

  // Set interval for every 2 minutes (120,000ms)
  const intervalId = setInterval(generateToken, 120000);

  // Return cleanup function
  return () => clearInterval(intervalId);
}

