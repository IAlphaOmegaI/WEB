const tableRoot=$('html body #contents #contentsSubsector .container-fluid');
$.ajax({
    type:"GET",
    data:"",
    url:"./JSON/tableGenerator.json",
    success: function(json){
        Object.keys(json).map((rawData)=>{
            const data=json[rawData];
            var buttonNumber="tableDataActivator"+data.number;
            var dataNumber="tableData"+data.number;
            tableRoot.append(`<div class="row  tableRow">
                                <div class="col  col-lg-1">${data.number}</div>
                                <div class="col  col-lg-4">${data.name}</div>
                                <div class="col  col-lg-3">ALL ${data.price}</div>
                                <div class="col  col-lg-2">${data.change}</div>
                                <div class="col  col-lg-2">
                                    <button class="${buttonNumber}   tableDataActivator">LEARN MORE</button>
                                </div>
                            </div>
                            
            
                            <div class="${dataNumber}  tableData">  
                                <div class="row">
                                    <div class="col">
                                        <div class="tableImgContainer">
                                            <img src="${data.src}" /> 
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="tableTextContainer">
                                            <h1>MORE INFORMATION</h1>
                                            <p>${data.text}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`);



                            $("."+dataNumber).slideUp(0);
                            $("."+buttonNumber).click(function(){
                                $("."+dataNumber).slideToggle();
                            });
        })
    },
    error:function(e){
        console.log(e);
    }
});
