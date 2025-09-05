function simulateSubmit(formId, successId){
  const f = document.getElementById(formId);
  const s = document.getElementById(successId);
  if(!f || !s) return;
  f.addEventListener('submit', (e)=>{
    e.preventDefault();
    s.style.display = 'block';
    window.dataLayer.push({event:'lead_submitted', form: formId});
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  simulateSubmit('quick-form','q-success');
  simulateSubmit('contact-form','contact-success');
});