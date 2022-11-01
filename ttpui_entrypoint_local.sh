#!/bin/bash

cd ./public
mkdir -p globalConfig
rm -f globalConfig/env-config.js
touch globalConfig/env-config.js

echo "window['globalConfigs'] = {" >> globalConfig/env-config.js

# export | grep UI_TTP_ | awk '{print $3}' | sed -e 's/^.\{,7\}//' -e 's/\"//g' > .env
# Read .env file (key-value pairs)
while read -r line || [[ -n "$line" ]];
do
  # Split env variables by character `=`
  if printf '%s\n' "$line" | grep -q -e '='; then
    varname=$(printf '%s\n' "$line" | sed -e 's/=.*//')
    varname=$(printf '%s\n' "$varname" | sed -e 's/^UI_TTP_//')
    varvalue=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')
    varvalue=$(printf '%s\n' "$varvalue" | sed -e 's/ #.*//')
    varcomment=''
    if [[ $line == *"#"*  ]]; then
      varcomment=$(printf '%s\n' "$line" | sed -e 's/^[^#]*#//')
      varcomment="// $varcomment"
      echo $varcomment
    fi
  fi


  # Read value of current variable if exists as Environment variable
  value=$(printf '%s\n' "${!varname}")
  # else use value from .env file
  [[ -z $value ]] && value=${varvalue}
  
  # Append to JS file
  echo "  $varname: \"$value\"," >> globalConfig/env-config.js
done < ../.env

echo "}" >> globalConfig/env-config.js
