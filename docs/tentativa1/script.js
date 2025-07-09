let produse = {};

fetch('produse.json')
  .then(res => res.json())
  .then(data => {
    produse = data;
    incarcaBranduri();
  });

function incarcaBranduri() {
  const brandSelect = document.getElementById("brandSelect");
  brandSelect.innerHTML = '<option value="">-- Alege brand --</option>';
  for (const brand in produse) {
    brandSelect.innerHTML += `<option value="${brand}">${brand}</option>`;
  }
}

function afiseazaModele() {
  const brand = document.getElementById("brandSelect").value;
  const modelSelect = document.getElementById("modelSelect");
  modelSelect.innerHTML = '<option value="">-- Alege model --</option>';

  if (!brand) return;

  const modele = Object.keys(produse[brand]);
  modele.forEach(model => {
    modelSelect.innerHTML += `<option value="${model}">${model}</option>`;
  });

  document.getElementById("culoareSelect").innerHTML = '';
  document.getElementById("rezultat").innerHTML = '';
}

function afiseazaCulori() {
  const brand = document.getElementById("brandSelect").value;
  const model = document.getElementById("modelSelect").value;
  const culoareSelect = document.getElementById("culoareSelect");

  culoareSelect.innerHTML = '<option value="">-- Alege culoare --</option>';
  if (!brand || !model) return;

  produse[brand][model].forEach(p => {
    culoareSelect.innerHTML += `<option value="${p.culoare}">${p.culoare}</option>`;
  });

  document.getElementById("rezultat").innerHTML = '';
}

function afiseazaImagine() {
  const brand = document.getElementById("brandSelect").value;
  const model = document.getElementById("modelSelect").value;
  const culoare = document.getElementById("culoareSelect").value;

  if (!brand || !model || !culoare) return;

  const produs = produse[brand][model].find(p => p.culoare === culoare);

  
  if (produs) {
    const imaginiHtml = produs.imagini.map(img => `<img src="${img}" style="width:150px; margin:5px;">`).join("");
    document.getElementById("rezultat").innerHTML = `
      <h3>${model} - ${culoare}</h3>
      ${imaginiHtml}
      <br><strong>Preț: ${produs.pret}</strong>
    `;
  }
}

