let tableid = document.getElementById("tableid")
let addbut = document.getElementById("addbut")


addbut.addEventListener('click', function () {
    let tableid = document.getElementById("tableid")
    let tr = document.createElement("tr")

    let task = document.createElement("td");
    task.innerHTML = prompt('اسم المهمة');

    let done = document.createElement("td");
    done.innerHTML = prompt('تمت او لم تتم؟');

    let createtime = document.createElement("td");
    createtime.innerHTML = new Date();

    let editinfo = document.createElement("td");
    editinfo.innerHTML = "لم يتم التعديل عليه";

    let editbut = document.createElement("button")
    editbut.className = "editBut";
    editbut.innerHTML = "تعديل"

    editbut.addEventListener('click', function () {
        editinfo.innerHTML = new Date();
        task.innerHTML = prompt('اسم المهمة');
        done.innerHTML = prompt('تمت او لم تتم؟');

        if (task.innerHTML === null || task.innerHTML.trim() === "" && done.innerHTML === null || done.innerHTML.trim() === "") {
            Swal.fire({
                icon: 'error',
                title: 'خطأ لم تكتب شيء',
            })
            task.innerHTML = "لم تكتب شيء";
            done.innerHTML = "لم تكتب شيء";
        } else if (task.innerHTML.trim() === "") {
            task.innerHTML = "لم تكتب شيء";
        } else {
            Swal.fire({
                icon: 'success',
                title: 'تم تعديل ماتريده',
            })
        }
    })

    let deletebut = document.createElement("button")
    deletebut.className = "delBut";
    deletebut.innerHTML = "حذف"



    if (task.innerHTML === null || task.innerHTML.trim() === "" && done.innerHTML === null || done.innerHTML.trim() === "") {
        Swal.fire({
            icon: 'error',
            title: 'خطأ لم تكتب شيء',
        })
        tableid.removeChild(tr);
    }  else if (task.innerHTML.trim() === "") {
        Swal.fire({
            icon: 'error',
            title: 'خطأ لم تكتب شيء',
        })
        tableid.removeChild(tr);
    } else {
        Swal.fire({
            icon: 'success',
            title: 'تم انشاء ماتريده',
        })
    }

    tableid.appendChild(tr);
    tr.appendChild(task);
    tr.appendChild(done);
    tr.appendChild(createtime);
    tr.appendChild(editinfo);
    tr.appendChild(editbut);
    tr.appendChild(deletebut);


    deletebut.addEventListener('click', function () {
        // tableid.removeChild(tr);
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: true
        })

        swalWithBootstrapButtons.fire({
            title: 'هل أنت متأكد ؟',
            text: "عند التأكيد سيتم الحذف",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'تأكيد',
            cancelButtonText: 'إلغاء',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'تم الحذف !',
                    'success',
                    tableid.removeChild(tr)
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'ألغيت !',
                    'success',
                )
            }
        })
    })

})