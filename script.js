// عدّل الكلام الموجود هنا عشان يبقى شخصي ومن قلبك ❤️
const loveLetter = `رغم إني عمري ما كنت بهتم بالتواريخ زي 11/11 والحاجات دي، بس معاكي بقيت أهتم بكل تفصيلة،
 بكل تاريخ حلو، وبكل مناسبة ممكن تكون سبب إني أفرحك أو أشوفك مبسوطة.
بقيت أهتم بكل تفصيلة حلوة بتحصل بينا،
 وبكل تفصيلة تخصك، وبكل حاجة ممكن تسعدك حتى لو كانت بسيطة 
أو صغيرة في نظر أي حد تاني.عارفة إيه اللي غريب؟ إني بقيت أشوف إن أي يوم ممكن يبقى يوم مميز لمجرد إنه مرتبط بيكي،
 وإن أبسط التفاصيل ممكن تتحول لذكريات غالية عندي لمجرد إنك كنتي جزء منها.
يمكن أنا مش بعرف أعبّر دايمًا عن كل اللي جوايا، بس الحقيقة إنك خليتيني أحب تفاصيل مكنتش باخد بالي منها،
 وأستنى أيام مكنتش أعرف إنها ممكن تبقى مميزة بالشكل ده.
نفسي أفضل أخلق معاكي ذكريات حلوة،
 ونفضل نحتفل بكل تفصيلة صغيرة وكبيرة تخصنا، ونبص بعد سنين لكل الأيام دي ونبتسم ونفتكر إننا كنا بنحب بعض في كل تفصيلة.
مش عارف ده سببه إيه، بس الأكيد إنه بسبب إني بحبك، وبحبك بطريقة خلت كل حاجة تخصك تهمني، وكل حاجة بتفرحك تفرحني،
 وبقيت أتمنى أكون أنا نفسي سبب في ابتسامتك كل يوم.
يمكن 11/11 تاريخ مميز عند ناس كتير، بس بالنسبالي أجمل حاجة فيه إنه فرصة جديدة أقولك فيها إني بحبك،
 وإن وجودك في حياتي هو أحلى تفصيلة حصلتلي. `;

const reasons = [
  { title: "ضحكتك", description: "لأن ضحكتك بتخلّي اليوم العادي أحلى." },
  { title: "طريقتك", description: "في كلامك وطريقتك تفاصيل مميزة بالنسبالي." },
  { title: "وجودك", description: "مجرد وجودك بيخلّي حاجات كتير ألطف." },
  { title: "اهتمامك", description: "بحب التفاصيل الصغيرة اللي بتبيّن اهتمامك." },
  { title: "عفويتك", description: "بحب إنك تكوني على طبيعتك." },
  { title: "صوتك", description: "فيه راحة وفرحة مش بعرف أوصفهم." },
  { title: "تفاصيلك", description: "حتى الحاجات الصغيرة اللي يمكن متاخديش بالك منها." },
  { title: "قلبك", description: "بحب طريقتك وإحساسك والجانب الحلو اللي فيكي." },
  { title: "ذكرياتنا", description: "كل لحظة حلوة بينا ليها مكان عندي." },
  { title: "إنتِ", description: "مش سبب واحد؛ بحب حاجات كتير لأنها ببساطة إنتِ." },
  { title: "كل يوم", description: "كل يوم بيعدّي بيخليني أكتشف حاجة جديدة بحبها فيكي." }
];

const starsContainer = document.getElementById("stars");
for (let i = 0; i < 55; i++) {
  const star = document.createElement("span");
  star.className = "star";
  star.textContent = Math.random() > 0.5 ? "✦" : "·";
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.fontSize = `${8 + Math.random() * 12}px`;
  star.style.animationDelay = `${Math.random() * 3}s`;
  starsContainer.appendChild(star);
}

// فتح الظرف وكتابة الرسالة تدريجيًا
const envelope = document.getElementById("envelope");
const letterCard = document.getElementById("letterCard");
const typedLetter = document.getElementById("typedLetter");
const envelopeHint = document.getElementById("envelopeHint");
let letterOpened = false;

envelope.addEventListener("click", () => {
  if (letterOpened) return;
  letterOpened = true;
  envelope.classList.add("open");
  envelopeHint.textContent = "رسالة مخصوص ليكي ♥";
  setTimeout(() => {
    letterCard.classList.add("show");
    typeText(loveLetter, typedLetter, 35);
  }, 450);
});

function typeText(text, element, speed) {
  let index = 0;
  element.textContent = "";
  const timer = setInterval(() => {
    element.textContent += text.charAt(index);
    index++;
    if (index >= text.length) clearInterval(timer);
  }, speed);
}

// إنشاء القلوب من بيانات الأسباب الموجودة فوق
const reasonsGrid = document.getElementById("reasonsGrid");
const reasonDialog = document.getElementById("reasonDialog");
const reasonNumber = document.getElementById("reasonNumber");
const reasonTitle = document.getElementById("reasonTitle");
const reasonDescription = document.getElementById("reasonDescription");
let currentReason = 0;

reasons.forEach((reason, index) => {
  const button = document.createElement("button");
  button.className = "reason-heart";
  button.type = "button";
  button.innerHTML = `♥<span>${String(index + 1).padStart(2, "0")}</span>`;
  button.setAttribute("aria-label", `السبب رقم ${index + 1}`);
  button.addEventListener("click", () => showReason(index));
  reasonsGrid.appendChild(button);
});

function showReason(index) {
  currentReason = index;
  const reason = reasons[index];
  reasonNumber.textContent = String(index + 1).padStart(2, "0");
  reasonTitle.textContent = reason.title;
  reasonDescription.textContent = reason.description;
  reasonDialog.showModal();
}

document.getElementById("dialogClose").addEventListener("click", () => reasonDialog.close());
document.getElementById("dialogNext").addEventListener("click", () => {
  showReason((currentReason + 1) % reasons.length);
});

// الأمنية الأخيرة
document.getElementById("wishButton").addEventListener("click", () => {
  const reveal = document.getElementById("wishReveal");
  const loveMessage = document.getElementById("loveMessage");
  const signature = document.getElementById("signature");

  reveal.hidden = false;
  loveMessage.hidden = false;
  signature.hidden = false;

  document.getElementById("wishButton").textContent = "أمنية من قلبي ♥";
});