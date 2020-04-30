import React from 'react';

const loadScript = () => {
    $(document).ready(function() {
        let count = 1;
        const body = document.getElementsByTagName("body")[0];
        const autocomplete_component = document.getElementById('autocomplete-component');
        const autocomplete_content = autocomplete_component.querySelector('div.autocomplete-content');
        const autocomplete_list_array = autocomplete_component.querySelectorAll('li.autocomplete__item');
        let autocomplete_text_input = autocomplete_component.getElementsByClassName('autocomplete-search')[0];
        
        autocomplete_text_input.addEventListener('input', function (e) {
            for (var i = 0; i < autocomplete_list_array.length; i++) {
                matching(autocomplete_list_array[i])
            }
            show_list(autocomplete_content);
            key_up_down();
        });
        
        autocomplete_text_input.addEventListener('click', function (e) {
            init_list();
            show_list(autocomplete_content);
            key_up_down();
        });
        
        autocomplete_text_input.addEventListener('keypress', function (e) {
            if (e.keyCode == 13) {
                e.target.value = autocomplete_content.querySelector('[data-highlight="true"]').innerHTML
            }
            hide_list(autocomplete_content)
            init_list();
        });
        
        function matching(item) {
            var str = new RegExp(autocomplete_text_input.value, 'gi');
            if (item.innerHTML.match(str)) {
                item.dataset.display = 'true'
            } else {
                item.dataset.display = 'false';
                item.dataset.highlight = 'false';
                count = 0
            }
        }
        
        function init_list() {
            count = 0;
            for (var i = 0; i < autocomplete_list_array.length; i++) {
                init_item(autocomplete_list_array[i]);
                autocomplete_list_array[i].addEventListener('click', copy_paste);
            }
        }
        
        function init_item(item) {
            item.dataset.display = 'true';
            item.dataset.highlight = 'false';
        }
        
        function copy_paste() {
            autocomplete_text_input.value = this.innerHTML;
            // todo : check match of list text and input value for .current 
            init_list();
            hide_list(autocomplete_content);
        }
        
        function hide_list(ele) {
            ele.dataset.toggle = 'false'
        }
        
        function show_list(ele) {
            ele.dataset.toggle = 'true'
        }
        
        function key_up_down() {
            let items = autocomplete_component.querySelectorAll('li.autocomplete__item[data-display="true"]')
            let last = items[items.length - 1];
            let first = items[0];
            
            autocomplete_text_input.onkeydown = function (e) {
                if (e.keyCode === 38) {
                    count--;
                    count = count <= 0 ? items.length : count;
                    items[count - 1].dataset.highlight = items[count - 1] ? 'true' : 'false';
                    if (items[count]) {
                        items[count].dataset.highlight = 'false';
                    }
                    else {
                        first.dataset.highlight = 'false';
                    }
                } 
                
                if (e.keyCode === 40) {
                    items[count].dataset.highlight = items[count] ? 'true' : 'false';
                    if (items[count - 1]) {
                        items[count - 1].dataset.highlight = 'false';
                    }
                    else {
                        last.dataset.highlight = 'false';
                    }
                    count++;
                    count = count >= items.length ? 0 : count;
                }
            };
        }
        autocomplete_component.addEventListener('mouseleave', function(event){
            if (event.target != autocomplete_content && event.target.parentNode != autocomplete_content){
                autocomplete_content.dataset.toggle = 'false'
            }
        });
    });
}

const Autocomplete = (props) => {
    const value = ["one", "two", "three"];
    const selectId = "location", title = "Where do you want to go?";
    loadScript(); 
    return (
        <div className="autocomplete" id="autocomplete-component">
            <div className="select-wrap">
            <input
                className="form-control txt autocomplete-search"
                type="text"
                id={selectId}
                required
            />
            <label className="form-control-placeholder" htmlFor={selectId}>
                {title}
            </label>
            </div>
            <div className="autocomplete-content" data-toggle="false">
            <span className="close"></span>
            <div className="autocomplete__list">
                <ul>
                {value.map((item, index) => {
                    const itemClass = index === 0 ? "autocomplete__item item-bold" : "autocomplete__item";
                    return (
                    <li
                        key={index}
                        className={itemClass}
                        data-display="true"
                        data-highlight="false"
                    >
                        {item}
                    </li>
                    );
                })}
                </ul>
            </div>
            </div>
        </div>
    );
}

export default Autocomplete;