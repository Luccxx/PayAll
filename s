[1mdiff --git a/public/js/PostNewData.js b/public/js/PostNewData.js[m
[1mindex a4dd1e3..35139e7 100644[m
[1m--- a/public/js/PostNewData.js[m
[1m+++ b/public/js/PostNewData.js[m
[36m@@ -1,4 +1,4 @@[m
[31m-import { UpdateDataReturn } from "./UpdateData.js";[m
[32m+[m[32mimport { UpdateDataReturn } from "./DeleteData.js";[m
 [m
 let buttonUpdateValue  = 0;[m
 const dataToSubmit = [];[m
[36m@@ -60,13 +60,17 @@[m [mfunction SubmitData(){[m
         const buttonUpdate = document.createElement('button');[m
         const buttonDelete = document.createElement('button');[m
         const dataRow = document.createElement("tr");[m
[31m-[m
[32m+[m[41m        [m
         for (const key in novoPagamento) {[m
             const dataCell = document.createElement("td");[m
             dataCell.textContent = novoPagamento[key];[m
             dataRow.appendChild(dataCell);[m
[32m+[m[41m          [m
         }[m
[32m+[m
[32m+[m[41m        [m
         buttonUpdate.textContent = "Update";[m
[32m+[m[32m        buttonUpdate.classList.add('buttonUpdate');[m
         buttonUpdate.setAttribute('id', 'buttonUpdate');[m
         buttonUpdate.setAttribute('value', ValueButton);[m
         [m
[36m@@ -79,8 +83,8 @@[m [mfunction SubmitData(){[m
 [m
         tbody.appendChild(dataRow);[m
 [m
[31m-        UpdateDataReturn(buttonUpdate, dataToSubmit);[m
[31m-[m
[32m+[m[32m        UpdateDataReturn(buttonUpdate, dataToSubmit, tbody);[m
[32m+[m[41m        [m
         this.reset();[m
         DateSave();[m
         DateNotSave(VarDateNotSave);[m
[1mdiff --git a/src/pages/nova-conta.html b/src/pages/nova-conta.html[m
[1mindex 285988e..5b04726 100644[m
[1m--- a/src/pages/nova-conta.html[m
[1m+++ b/src/pages/nova-conta.html[m
[36m@@ -66,6 +66,6 @@[m
         <script src="/src/utils/footer.js"></script>[m
     </div>   [m
 </body>[m
[31m-<script src="/public/js/PostNewData.js"></script>[m
[32m+[m[32m<script type="module" src="/public/js/PostNewData.js"></script>[m
 <script type="module" src="/public/js/runApi.js"></script>[m
 </html>[m
