 // Code goes here
// JSON to CSV Converter
        function ConvertToCSV(objArray) {
            var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ','

                    line += array[i][index];
                }

                str += line + '\r\n';
            }

            return str;
        }

        // Example
        $(document).ready(function () {

            // Create Object


            $('#convert').on('click',function(){

CSV = ConvertToCSV(jsonObject);
                // $('#csv').append(ConvertToCSV(items));
var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);


        var link = document.createElement("a");
        link.href = uri;
        // link.style = "visibility:hidden";
        link.download = 'Hello' + ".csv";
        // link.text = 'Download';
console.log(link);

        $('body').append(link);
        // link.click();
        // document.body.removeChild(link);
        $('a').append('Download');
            });
            // var items = [
            //       { name: "Item 1", color: "Green", size: "X-Large" },
            //       { name: "Item 2", color: "Green", size: "X-Large" },
            //       { name: "Item 3", color: "Green", size: "X-Large" }];

            // Convert Object to JSON
            // var jsonObject = JSON.stringify(items);

            // // Display JSON
            // $('#json').text(jsonObject);

            // Convert JSON to CSV & Display CSV
        
        });