document.getElementById('formularioRegistro').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario hasta que pase la validación

    // Datos del Alumno
    var numeroControl = document.getElementById('numeroControl').value;
    var nombres = document.getElementById('nombres').value;
    var primerApellido = document.getElementById('primerApellido').value;
    var segundoApellido = document.getElementById('segundoApellido').value;
    var curp = document.getElementById('curp').value;
    var nss = document.getElementById('nss').value;
    var correoInstitucional = document.getElementById('correoInstitucional').value;

    // Datos de la Empresa
    var rfcEmpresa = document.getElementById('rfcEmpresa').value;
    var nombreEmpresa = document.getElementById('nombreEmpresa').value;
    var estadoEmpresa = document.getElementById('estadoEmpresa').value;
    var municipioEmpresa = document.getElementById('municipioEmpresa').value;
    var localidadEmpresa = document.getElementById('localidadEmpresa').value;
    var domicilioEmpresa = document.getElementById('domicilioEmpresa').value;

    // Datos Generales
    var nombreProyecto = document.getElementById('nombreProyecto').value;
    var fechaInicio = document.getElementById('fechaInicio').value;
    var fechaFin = document.getElementById('fechaFin').value;

    // Expresiones regulares para validación
    var numeroControlRegExp = /^\d{8}$/;
    var nombreRegExp = /^[A-ZÁÉÍÓÚÑ\s]+$/;
    var curpRegExp = /^[A-Z]{4}\d{6}[A-HJ-NP-Z]{6}\d{2}$/;
	//validación completa para la curp:
	//^[A-Z][AEIOU][A-Z]{2}\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])[HM](AS|BC|BS|CC|CL|CM|CS|CH|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]\d$

    var nssRegExp = /^\d{11}$/;
    var correoRegExp = /^\d{8}@itoaxaca\.edu\.mx$/;
    var rfcRegExp = /^[A-ZÑ&]{3,4}\d{6}[A-Z\d]{3}$/;
	var nombreEmpresaRegExp = /^[A-Za-z0-9\s]+$/;
	var lugar=/^[A-Za-z\s]+$/;
	var direccionEmpresaRegExp = /^[A-Za-z\s]+, [0-9]+, [A-Za-z\s]+, [0-9]{5}$/;

	
	

    // Validación de cada campo
    if (!numeroControlRegExp.test(numeroControl)) {
        alert('Por favor, introduce un número de control válido.');
        return;
    }
    if (!nombreRegExp.test(nombres) || !nombreRegExp.test(primerApellido) || (segundoApellido && !nombreRegExp.test(segundoApellido))) {
        alert('Por favor, asegúrate de que los nombres y apellidos solo contengan letras mayúsculas.');
        return;
    }
    if (!curpRegExp.test(curp)) {
        alert('Por favor, introduce un CURP válido.');
        return;
    }
    if (!nssRegExp.test(nss)) {
        alert('Por favor, introduce un NSS válido.');
        return;
    }
    if (!correoRegExp.test(correoInstitucional)) {
        alert('Por favor, introduce un correo institucional válido.');
        return;
    }
    if (!rfcRegExp.test(rfcEmpresa)) {
        alert('Por favor, introduce un RFC válido para la empresa.');
        return;
    }
	if (!nombreEmpresaRegExp.test(nombreEmpresa)) {
		alert('Por favor, introduce un nombre de empresa válido.');
		return false;
	}
	if (!lugar.test(estadoEmpresa)) {
		alert('Por favor, introduce un nombre de estado valido');
		return false;
	}
	if (!lugar.test(municipioEmpresa)) {
		alert('Por favor, introduce un nombre de municipio valido');
		return false;
	}
	if (!lugar.test(localidadEmpresa)) {
		alert('Por favor, introduce un nombre de localidad valido');
		return false;
	}
	if (!direccionEmpresaRegExp.test(domicilioEmpresa)) {
		alert('Por favor, introduce una dirección válida. Formato esperado: Calle, Número, Colonia, CP');
		return false;
	}
	//nombre del proyecto 
	if (!nombreEmpresaRegExp.test(nombreProyecto)) {
		alert('Por favor, introduce un nombre para el proyecto válido.');
		return false;
	}
	
	

    // Validación de fechas (opcional, asegurarse de que la fecha de inicio es anterior a la fecha fin)
    if (new Date(fechaInicio) >= new Date(fechaFin)) {
        alert('La fecha de inicio debe ser anterior a la fecha fin.');
        return;
    }
	
	

    // Si todas las validaciones son correctas, se permite el envío del formulario
    this.submit();
});
