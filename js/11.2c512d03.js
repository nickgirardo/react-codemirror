(window.webpackJsonp=window.webpackJsonp||[]).push([[11,7,83],{"./node_modules/codemirror/mode/htmlmixed/htmlmixed.js":function(e,t,r){!function(e){"use strict";var t={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]},r={};function n(e,t){var n=e.match(function(e){var t=r[e];return t||(r[e]=new RegExp("\\s+"+e+"\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*"))}(t));return n?/^\s*(.*?)\s*$/.exec(n[2])[1]:""}function s(e,t){return new RegExp((t?"^":"")+"</s*"+e+"s*>","i")}function a(e,t){for(var r in e)for(var n=t[r]||(t[r]=[]),s=e[r],a=s.length-1;a>=0;a--)n.unshift(s[a])}e.defineMode("htmlmixed",function(r,i){var l=e.getMode(r,{name:"xml",htmlMode:!0,multilineTagIndentFactor:i.multilineTagIndentFactor,multilineTagIndentPastTag:i.multilineTagIndentPastTag}),o={},_=i&&i.tags,c=i&&i.scriptTypes;if(a(t,o),_&&a(_,o),c)for(var m=c.length-1;m>=0;m--)o.script.unshift(["type",c[m].matches,c[m].mode]);function u(t,a){var i,_=l.token(t,a.htmlState),c=/\btag\b/.test(_);if(c&&!/[<>\s\/]/.test(t.current())&&(i=a.htmlState.tagName&&a.htmlState.tagName.toLowerCase())&&o.hasOwnProperty(i))a.inTag=i+" ";else if(a.inTag&&c&&/>$/.test(t.current())){var m=/^([\S]+) (.*)/.exec(a.inTag);a.inTag=null;var p=">"==t.current()&&function(e,t){for(var r=0;r<e.length;r++){var s=e[r];if(!s[0]||s[1].test(n(t,s[0])))return s[2]}}(o[m[1]],m[2]),d=e.getMode(r,p),g=s(m[1],!0),f=s(m[1],!1);a.token=function(e,t){return e.match(g,!1)?(t.token=u,t.localState=t.localMode=null,null):function(e,t,r){var n=e.current(),s=n.search(t);return s>-1?e.backUp(n.length-s):n.match(/<\/?$/)&&(e.backUp(n.length),e.match(t,!1)||e.match(n)),r}(e,f,t.localMode.token(e,t.localState))},a.localMode=d,a.localState=e.startState(d,l.indent(a.htmlState,""))}else a.inTag&&(a.inTag+=t.current(),t.eol()&&(a.inTag+=" "));return _}return{startState:function(){var t=e.startState(l);return{token:u,inTag:null,localMode:null,localState:null,htmlState:t}},copyState:function(t){var r;return t.localState&&(r=e.copyState(t.localMode,t.localState)),{token:t.token,inTag:t.inTag,localMode:t.localMode,localState:r,htmlState:e.copyState(l,t.htmlState)}},token:function(e,t){return t.token(e,t)},indent:function(t,r,n){return!t.localMode||/^\s*<\//.test(r)?l.indent(t.htmlState,r):t.localMode.indent?t.localMode.indent(t.localState,r,n):e.Pass},innerMode:function(e){return{state:e.localState||e.htmlState,mode:e.localMode||l}}}},"xml","javascript","css"),e.defineMIME("text/html","htmlmixed")}(r("./node_modules/codemirror/lib/codemirror.js"),r("./node_modules/codemirror/mode/xml/xml.js"),r("./node_modules/codemirror/mode/javascript/javascript.js"),r("./node_modules/codemirror/mode/css/css.js"))},"./node_modules/codemirror/mode/php/php.js":function(e,t,r){!function(e){"use strict";function t(e){for(var t={},r=e.split(" "),n=0;n<r.length;++n)t[r[n]]=!0;return t}function r(e,t,s){return 0==e.length?n(t):function(a,i){for(var l=e[0],o=0;o<l.length;o++)if(a.match(l[o][0]))return i.tokenize=r(e.slice(1),t),l[o][1];return i.tokenize=n(t,s),"string"}}function n(e,t){return function(n,s){return function(e,t,n,s){if(!1!==s&&e.match("${",!1)||e.match("{$",!1))return t.tokenize=null,"string";if(!1!==s&&e.match(/^\$[a-zA-Z_][a-zA-Z0-9_]*/))return e.match("[",!1)&&(t.tokenize=r([[["[",null]],[[/\d[\w\.]*/,"number"],[/\$[a-zA-Z_][a-zA-Z0-9_]*/,"variable-2"],[/[\w\$]+/,"variable"]],[["]",null]]],n,s)),e.match(/\-\>\w/,!1)&&(t.tokenize=r([[["->",null]],[[/[\w]+/,"variable"]]],n,s)),"variable-2";for(var a=!1;!e.eol()&&(a||!1===s||!e.match("{$",!1)&&!e.match(/^(\$[a-zA-Z_][a-zA-Z0-9_]*|\$\{)/,!1));){if(!a&&e.match(n)){t.tokenize=null,t.tokStack.pop(),t.tokStack.pop();break}a="\\"==e.next()&&!a}return"string"}(n,s,e,t)}}var s="abstract and array as break case catch class clone const continue declare default do else elseif enddeclare endfor endforeach endif endswitch endwhile extends final for foreach function global goto if implements interface instanceof namespace new or private protected public static switch throw trait try use var while xor die echo empty exit eval include include_once isset list require require_once return print unset __halt_compiler self static parent yield insteadof finally",a="true false null TRUE FALSE NULL __CLASS__ __DIR__ __FILE__ __LINE__ __METHOD__ __FUNCTION__ __NAMESPACE__ __TRAIT__",i="func_num_args func_get_arg func_get_args strlen strcmp strncmp strcasecmp strncasecmp each error_reporting define defined trigger_error user_error set_error_handler restore_error_handler get_declared_classes get_loaded_extensions extension_loaded get_extension_funcs debug_backtrace constant bin2hex hex2bin sleep usleep time mktime gmmktime strftime gmstrftime strtotime date gmdate getdate localtime checkdate flush wordwrap htmlspecialchars htmlentities html_entity_decode md5 md5_file crc32 getimagesize image_type_to_mime_type phpinfo phpversion phpcredits strnatcmp strnatcasecmp substr_count strspn strcspn strtok strtoupper strtolower strpos strrpos strrev hebrev hebrevc nl2br basename dirname pathinfo stripslashes stripcslashes strstr stristr strrchr str_shuffle str_word_count strcoll substr substr_replace quotemeta ucfirst ucwords strtr addslashes addcslashes rtrim str_replace str_repeat count_chars chunk_split trim ltrim strip_tags similar_text explode implode setlocale localeconv parse_str str_pad chop strchr sprintf printf vprintf vsprintf sscanf fscanf parse_url urlencode urldecode rawurlencode rawurldecode readlink linkinfo link unlink exec system escapeshellcmd escapeshellarg passthru shell_exec proc_open proc_close rand srand getrandmax mt_rand mt_srand mt_getrandmax base64_decode base64_encode abs ceil floor round is_finite is_nan is_infinite bindec hexdec octdec decbin decoct dechex base_convert number_format fmod ip2long long2ip getenv putenv getopt microtime gettimeofday getrusage uniqid quoted_printable_decode set_time_limit get_cfg_var magic_quotes_runtime set_magic_quotes_runtime get_magic_quotes_gpc get_magic_quotes_runtime import_request_variables error_log serialize unserialize memory_get_usage var_dump var_export debug_zval_dump print_r highlight_file show_source highlight_string ini_get ini_get_all ini_set ini_alter ini_restore get_include_path set_include_path restore_include_path setcookie header headers_sent connection_aborted connection_status ignore_user_abort parse_ini_file is_uploaded_file move_uploaded_file intval floatval doubleval strval gettype settype is_null is_resource is_bool is_long is_float is_int is_integer is_double is_real is_numeric is_string is_array is_object is_scalar ereg ereg_replace eregi eregi_replace split spliti join sql_regcase dl pclose popen readfile rewind rmdir umask fclose feof fgetc fgets fgetss fread fopen fpassthru ftruncate fstat fseek ftell fflush fwrite fputs mkdir rename copy tempnam tmpfile file file_get_contents file_put_contents stream_select stream_context_create stream_context_set_params stream_context_set_option stream_context_get_options stream_filter_prepend stream_filter_append fgetcsv flock get_meta_tags stream_set_write_buffer set_file_buffer set_socket_blocking stream_set_blocking socket_set_blocking stream_get_meta_data stream_register_wrapper stream_wrapper_register stream_set_timeout socket_set_timeout socket_get_status realpath fnmatch fsockopen pfsockopen pack unpack get_browser crypt opendir closedir chdir getcwd rewinddir readdir dir glob fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype file_exists is_writable is_writeable is_readable is_executable is_file is_dir is_link stat lstat chown touch clearstatcache mail ob_start ob_flush ob_clean ob_end_flush ob_end_clean ob_get_flush ob_get_clean ob_get_length ob_get_level ob_get_status ob_get_contents ob_implicit_flush ob_list_handlers ksort krsort natsort natcasesort asort arsort sort rsort usort uasort uksort shuffle array_walk count end prev next reset current key min max in_array array_search extract compact array_fill range array_multisort array_push array_pop array_shift array_unshift array_splice array_slice array_merge array_merge_recursive array_keys array_values array_count_values array_reverse array_reduce array_pad array_flip array_change_key_case array_rand array_unique array_intersect array_intersect_assoc array_diff array_diff_assoc array_sum array_filter array_map array_chunk array_key_exists array_intersect_key array_combine array_column pos sizeof key_exists assert assert_options version_compare ftok str_rot13 aggregate session_name session_module_name session_save_path session_id session_regenerate_id session_decode session_register session_unregister session_is_registered session_encode session_start session_destroy session_unset session_set_save_handler session_cache_limiter session_cache_expire session_set_cookie_params session_get_cookie_params session_write_close preg_match preg_match_all preg_replace preg_replace_callback preg_split preg_quote preg_grep overload ctype_alnum ctype_alpha ctype_cntrl ctype_digit ctype_lower ctype_graph ctype_print ctype_punct ctype_space ctype_upper ctype_xdigit virtual apache_request_headers apache_note apache_lookup_uri apache_child_terminate apache_setenv apache_response_headers apache_get_version getallheaders mysql_connect mysql_pconnect mysql_close mysql_select_db mysql_create_db mysql_drop_db mysql_query mysql_unbuffered_query mysql_db_query mysql_list_dbs mysql_list_tables mysql_list_fields mysql_list_processes mysql_error mysql_errno mysql_affected_rows mysql_insert_id mysql_result mysql_num_rows mysql_num_fields mysql_fetch_row mysql_fetch_array mysql_fetch_assoc mysql_fetch_object mysql_data_seek mysql_fetch_lengths mysql_fetch_field mysql_field_seek mysql_free_result mysql_field_name mysql_field_table mysql_field_len mysql_field_type mysql_field_flags mysql_escape_string mysql_real_escape_string mysql_stat mysql_thread_id mysql_client_encoding mysql_get_client_info mysql_get_host_info mysql_get_proto_info mysql_get_server_info mysql_info mysql mysql_fieldname mysql_fieldtable mysql_fieldlen mysql_fieldtype mysql_fieldflags mysql_selectdb mysql_createdb mysql_dropdb mysql_freeresult mysql_numfields mysql_numrows mysql_listdbs mysql_listtables mysql_listfields mysql_db_name mysql_dbname mysql_tablename mysql_table_name pg_connect pg_pconnect pg_close pg_connection_status pg_connection_busy pg_connection_reset pg_host pg_dbname pg_port pg_tty pg_options pg_ping pg_query pg_send_query pg_cancel_query pg_fetch_result pg_fetch_row pg_fetch_assoc pg_fetch_array pg_fetch_object pg_fetch_all pg_affected_rows pg_get_result pg_result_seek pg_result_status pg_free_result pg_last_oid pg_num_rows pg_num_fields pg_field_name pg_field_num pg_field_size pg_field_type pg_field_prtlen pg_field_is_null pg_get_notify pg_get_pid pg_result_error pg_last_error pg_last_notice pg_put_line pg_end_copy pg_copy_to pg_copy_from pg_trace pg_untrace pg_lo_create pg_lo_unlink pg_lo_open pg_lo_close pg_lo_read pg_lo_write pg_lo_read_all pg_lo_import pg_lo_export pg_lo_seek pg_lo_tell pg_escape_string pg_escape_bytea pg_unescape_bytea pg_client_encoding pg_set_client_encoding pg_meta_data pg_convert pg_insert pg_update pg_delete pg_select pg_exec pg_getlastoid pg_cmdtuples pg_errormessage pg_numrows pg_numfields pg_fieldname pg_fieldsize pg_fieldtype pg_fieldnum pg_fieldprtlen pg_fieldisnull pg_freeresult pg_result pg_loreadall pg_locreate pg_lounlink pg_loopen pg_loclose pg_loread pg_lowrite pg_loimport pg_loexport http_response_code get_declared_traits getimagesizefromstring socket_import_stream stream_set_chunk_size trait_exists header_register_callback class_uses session_status session_register_shutdown echo print global static exit array empty eval isset unset die include require include_once require_once json_decode json_encode json_last_error json_last_error_msg curl_close curl_copy_handle curl_errno curl_error curl_escape curl_exec curl_file_create curl_getinfo curl_init curl_multi_add_handle curl_multi_close curl_multi_exec curl_multi_getcontent curl_multi_info_read curl_multi_init curl_multi_remove_handle curl_multi_select curl_multi_setopt curl_multi_strerror curl_pause curl_reset curl_setopt_array curl_setopt curl_share_close curl_share_init curl_share_setopt curl_strerror curl_unescape curl_version mysqli_affected_rows mysqli_autocommit mysqli_change_user mysqli_character_set_name mysqli_close mysqli_commit mysqli_connect_errno mysqli_connect_error mysqli_connect mysqli_data_seek mysqli_debug mysqli_dump_debug_info mysqli_errno mysqli_error_list mysqli_error mysqli_fetch_all mysqli_fetch_array mysqli_fetch_assoc mysqli_fetch_field_direct mysqli_fetch_field mysqli_fetch_fields mysqli_fetch_lengths mysqli_fetch_object mysqli_fetch_row mysqli_field_count mysqli_field_seek mysqli_field_tell mysqli_free_result mysqli_get_charset mysqli_get_client_info mysqli_get_client_stats mysqli_get_client_version mysqli_get_connection_stats mysqli_get_host_info mysqli_get_proto_info mysqli_get_server_info mysqli_get_server_version mysqli_info mysqli_init mysqli_insert_id mysqli_kill mysqli_more_results mysqli_multi_query mysqli_next_result mysqli_num_fields mysqli_num_rows mysqli_options mysqli_ping mysqli_prepare mysqli_query mysqli_real_connect mysqli_real_escape_string mysqli_real_query mysqli_reap_async_query mysqli_refresh mysqli_rollback mysqli_select_db mysqli_set_charset mysqli_set_local_infile_default mysqli_set_local_infile_handler mysqli_sqlstate mysqli_ssl_set mysqli_stat mysqli_stmt_init mysqli_store_result mysqli_thread_id mysqli_thread_safe mysqli_use_result mysqli_warning_count";e.registerHelper("hintWords","php",[s,a,i].join(" ").split(" ")),e.registerHelper("wordChars","php",/[\w$]/);var l={name:"clike",helperType:"php",keywords:t(s),blockKeywords:t("catch do else elseif for foreach if switch try while finally"),defKeywords:t("class function interface namespace trait"),atoms:t(a),builtin:t(i),multiLineStrings:!0,hooks:{$:function(e){return e.eatWhile(/[\w\$_]/),"variable-2"},"<":function(e,t){var r;if(r=e.match(/<<\s*/)){var s=e.eat(/['"]/);e.eatWhile(/[\w\.]/);var a=e.current().slice(r[0].length+(s?2:1));if(s&&e.eat(s),a)return(t.tokStack||(t.tokStack=[])).push(a,0),t.tokenize=n(a,"'"!=s),"string"}return!1},"#":function(e){for(;!e.eol()&&!e.match("?>",!1);)e.next();return"comment"},"/":function(e){if(e.eat("/")){for(;!e.eol()&&!e.match("?>",!1);)e.next();return"comment"}return!1},'"':function(e,t){return(t.tokStack||(t.tokStack=[])).push('"',0),t.tokenize=n('"'),"string"},"{":function(e,t){return t.tokStack&&t.tokStack.length&&t.tokStack[t.tokStack.length-1]++,!1},"}":function(e,t){return t.tokStack&&t.tokStack.length>0&&!--t.tokStack[t.tokStack.length-1]&&(t.tokenize=n(t.tokStack[t.tokStack.length-2])),!1}}};e.defineMode("php",function(t,r){var n=e.getMode(t,r&&r.htmlMode||"text/html"),s=e.getMode(t,l);return{startState:function(){var t=e.startState(n),a=r.startOpen?e.startState(s):null;return{html:t,php:a,curMode:r.startOpen?s:n,curState:r.startOpen?a:t,pending:null}},copyState:function(t){var r,a=t.html,i=e.copyState(n,a),l=t.php,o=l&&e.copyState(s,l);return r=t.curMode==n?i:o,{html:i,php:o,curMode:t.curMode,curState:r,pending:t.pending}},token:function(t,r){var a=r.curMode==s;if(t.sol()&&r.pending&&'"'!=r.pending&&"'"!=r.pending&&(r.pending=null),a)return a&&null==r.php.tokenize&&t.match("?>")?(r.curMode=n,r.curState=r.html,r.php.context.prev||(r.php=null),"meta"):s.token(t,r.curState);if(t.match(/^<\?\w*/))return r.curMode=s,r.php||(r.php=e.startState(s,n.indent(r.html,""))),r.curState=r.php,"meta";if('"'==r.pending||"'"==r.pending){for(;!t.eol()&&t.next()!=r.pending;);var i="string"}else if(r.pending&&t.pos<r.pending.end){t.pos=r.pending.end;var i=r.pending.style}else var i=n.token(t,r.curState);r.pending&&(r.pending=null);var l,o=t.current(),_=o.search(/<\?/);return-1!=_&&("string"==i&&(l=o.match(/[\'\"]$/))&&!/\?>/.test(o)?r.pending=l[0]:r.pending={end:t.pos,style:i},t.backUp(o.length-_)),i},indent:function(e,t){return e.curMode!=s&&/^\s*<\//.test(t)||e.curMode==s&&/^\?>/.test(t)?n.indent(e.html,t):e.curMode.indent(e.curState,t)},blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",innerMode:function(e){return{state:e.curState,mode:e.curMode}}}},"htmlmixed","clike"),e.defineMIME("application/x-httpd-php","php"),e.defineMIME("application/x-httpd-php-open",{name:"php",startOpen:!0}),e.defineMIME("text/x-php",l)}(r("./node_modules/codemirror/lib/codemirror.js"),r("./node_modules/codemirror/mode/htmlmixed/htmlmixed.js"),r("./node_modules/codemirror/mode/clike/clike.js"))},"./node_modules/codemirror/mode/xml/xml.js":function(e,t,r){!function(e){"use strict";var t={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},r={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1};e.defineMode("xml",function(n,s){var a,i,l=n.indentUnit,o={},_=s.htmlMode?t:r;for(var c in _)o[c]=_[c];for(var c in s)o[c]=s[c];function m(e,t){function r(r){return t.tokenize=r,r(e,t)}var n=e.next();return"<"==n?e.eat("!")?e.eat("[")?e.match("CDATA[")?r(p("atom","]]>")):null:e.match("--")?r(p("comment","--\x3e")):e.match("DOCTYPE",!0,!0)?(e.eatWhile(/[\w\._\-]/),r(function e(t){return function(r,n){for(var s;null!=(s=r.next());){if("<"==s)return n.tokenize=e(t+1),n.tokenize(r,n);if(">"==s){if(1==t){n.tokenize=m;break}return n.tokenize=e(t-1),n.tokenize(r,n)}}return"meta"}}(1))):null:e.eat("?")?(e.eatWhile(/[\w\._\-]/),t.tokenize=p("meta","?>"),"meta"):(a=e.eat("/")?"closeTag":"openTag",t.tokenize=u,"tag bracket"):"&"==n?(e.eat("#")?e.eat("x")?e.eatWhile(/[a-fA-F\d]/)&&e.eat(";"):e.eatWhile(/[\d]/)&&e.eat(";"):e.eatWhile(/[\w\.\-:]/)&&e.eat(";"))?"atom":"error":(e.eatWhile(/[^&<]/),null)}function u(e,t){var r=e.next();if(">"==r||"/"==r&&e.eat(">"))return t.tokenize=m,a=">"==r?"endTag":"selfcloseTag","tag bracket";if("="==r)return a="equals",null;if("<"==r){t.tokenize=m,t.state=f,t.tagName=t.tagStart=null;var n=t.tokenize(e,t);return n?n+" tag error":"tag error"}return/[\'\"]/.test(r)?(t.tokenize=function(e){var t=function(t,r){for(;!t.eol();)if(t.next()==e){r.tokenize=u;break}return"string"};return t.isInAttribute=!0,t}(r),t.stringStartCol=e.column(),t.tokenize(e,t)):(e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function p(e,t){return function(r,n){for(;!r.eol();){if(r.match(t)){n.tokenize=m;break}r.next()}return e}}function d(e){e.context&&(e.context=e.context.prev)}function g(e,t){for(var r;;){if(!e.context)return;if(r=e.context.tagName,!o.contextGrabbers.hasOwnProperty(r)||!o.contextGrabbers[r].hasOwnProperty(t))return;d(e)}}function f(e,t,r){return"openTag"==e?(r.tagStart=t.column(),h):"closeTag"==e?y:f}function h(e,t,r){return"word"==e?(r.tagName=t.current(),i="tag",b):o.allowMissingTagName&&"endTag"==e?(i="tag bracket",b(e,0,r)):(i="error",h)}function y(e,t,r){if("word"==e){var n=t.current();return r.context&&r.context.tagName!=n&&o.implicitlyClosed.hasOwnProperty(r.context.tagName)&&d(r),r.context&&r.context.tagName==n||!1===o.matchClosing?(i="tag",q):(i="tag error",k)}return o.allowMissingTagName&&"endTag"==e?(i="tag bracket",q(e,0,r)):(i="error",k)}function q(e,t,r){return"endTag"!=e?(i="error",q):(d(r),f)}function k(e,t,r){return i="error",q(e,0,r)}function b(e,t,r){if("word"==e)return i="attribute",v;if("endTag"==e||"selfcloseTag"==e){var n=r.tagName,s=r.tagStart;return r.tagName=r.tagStart=null,"selfcloseTag"==e||o.autoSelfClosers.hasOwnProperty(n)?g(r,n):(g(r,n),r.context=new function(e,t,r){this.prev=e.context,this.tagName=t,this.indent=e.indented,this.startOfLine=r,(o.doNotIndent.hasOwnProperty(t)||e.context&&e.context.noIndent)&&(this.noIndent=!0)}(r,n,s==r.indented)),f}return i="error",b}function v(e,t,r){return"equals"==e?x:(o.allowMissing||(i="error"),b(e,0,r))}function x(e,t,r){return"string"==e?w:"word"==e&&o.allowUnquoted?(i="string",b):(i="error",b(e,0,r))}function w(e,t,r){return"string"==e?w:b(e,0,r)}return m.isInText=!0,{startState:function(e){var t={tokenize:m,state:f,indented:e||0,tagName:null,tagStart:null,context:null};return null!=e&&(t.baseIndent=e),t},token:function(e,t){if(!t.tagName&&e.sol()&&(t.indented=e.indentation()),e.eatSpace())return null;a=null;var r=t.tokenize(e,t);return(r||a)&&"comment"!=r&&(i=null,t.state=t.state(a||r,e,t),i&&(r="error"==i?r+" error":i)),r},indent:function(t,r,n){var s=t.context;if(t.tokenize.isInAttribute)return t.tagStart==t.indented?t.stringStartCol+1:t.indented+l;if(s&&s.noIndent)return e.Pass;if(t.tokenize!=u&&t.tokenize!=m)return n?n.match(/^(\s*)/)[0].length:0;if(t.tagName)return!1!==o.multilineTagIndentPastTag?t.tagStart+t.tagName.length+2:t.tagStart+l*(o.multilineTagIndentFactor||1);if(o.alignCDATA&&/<!\[CDATA\[/.test(r))return 0;var a=r&&/^<(\/)?([\w_:\.-]*)/.exec(r);if(a&&a[1])for(;s;){if(s.tagName==a[2]){s=s.prev;break}if(!o.implicitlyClosed.hasOwnProperty(s.tagName))break;s=s.prev}else if(a)for(;s;){var i=o.contextGrabbers[s.tagName];if(!i||!i.hasOwnProperty(a[2]))break;s=s.prev}for(;s&&s.prev&&!s.startOfLine;)s=s.prev;return s?s.indent+l:t.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"\x3c!--",blockCommentEnd:"--\x3e",configuration:o.htmlMode?"html":"xml",helperType:o.htmlMode?"html":"xml",skipAttribute:function(e){e.state==x&&(e.state=b)}}}),e.defineMIME("text/xml","xml"),e.defineMIME("application/xml","xml"),e.mimeModes.hasOwnProperty("text/html")||e.defineMIME("text/html",{name:"xml",htmlMode:!0})}(r("./node_modules/codemirror/lib/codemirror.js"))}}]);