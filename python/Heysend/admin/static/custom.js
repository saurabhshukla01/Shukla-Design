$(document).ready(function () {
    $(".select2").select2(
        {
            placeholder: "Select",
            allowClear: true,
        }
    );

    $(".select22").select2(
        {
            placeholder: "Select",
            allowClear: true,
            tags: true,
        }
    );

   function matchStart(params, data) {
    
        if ($.trim(params.term) === '') {
            return data;
        }

        filteredChildren = [];

        $.each(data, function(index, val) {

            console.log(index);

            if (data.text.toUpperCase().indexOf(params.term.toUpperCase()) == 0) {
                filteredChildren.push(data.text);
            }
        });

  
        if (filteredChildren.length) {
            var modifiedData = $.extend({}, data, true);
            modifiedData.data = filteredChildren;

            return modifiedData;
        }

        // Return `null` if the term should not be displayed
        return null;
    } 

    $('.recipient_select2').select2({
        placeholder: "Select",
        allowClear: true,
        multiple: true,
        maximumSelectionLength: 10,
        tokenSeparators: [',', ', ', ' '],
        matcher: matchStart
    });

    $('.js-select-matcher').select2({
      matcher: matchStart
    });
 });
