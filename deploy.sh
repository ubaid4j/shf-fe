sudo git pull
sudo npm install
sudo ng build --base-href=/shf-fe/
sudo rm -rf /opt/tomcat/webapps/shf-fe
sudo mv dist/shf-fe /opt/tomcat/webapps/
