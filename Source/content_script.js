walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bThe Cloud\b/g, "My Butt");
	v = v.replace(/\bThe cloud\b/g, "My butt");
	v = v.replace(/\bthe Cloud\b/g, "my Butt");
	v = v.replace(/\bthe cloud\b/g, "my butt");
	v = v.replace(/\bwitnesses\b/g, "these dudes I know");
	v = v.replace(/\ballegedly\b/g, "kinda probably");
	v = v.replace(/\bnew study\b/g, "Tumblr post");
	v = v.replace(/\brebuild\b/g, "avenge");
	v = v.replace(/\bspace\b/g, "spaaace");
	v = v.replace(/\bGoogle Glass\b/g, "Virtual Boy");
	v = v.replace(/\bsmartphone\b/g, "Pokédex");
	v = v.replace(/\belectric\b/g, "atomic");
	v = v.replace(/\bElectric\b/g, "Atomic");
	v = v.replace(/\bSenator\b/g, "Elf-Lord");
	v = v.replace(/\bSenators\b/g, "Elf-Lords");
	v = v.replace(/\bsenator\b/g, "elf-lord");
	v = v.replace(/\bsenators\b/g, "elf-lords");
	v = v.replace(/\bcar\b/g, "cat");
	v = v.replace(/\belection\b/g, "eating contest");
	v = v.replace(/\bcongressional leaders\b/g, "river spirits");
	v = v.replace(/\bCongressional leaders\b/g, "River spirits");
	v = v.replace(/\bHomeland Security\b/g, "Homestar Runner");
	v = v.replace(/\bcould not be reached for comment\b/g, "is guilty and everyone knows it");
	
	// a few more for good measure
	v = v.replace(/\bsurveillance\b/g, "break dancing");
	v = v.replace(/\bthe White House\b/g, "White Castle");
	v = v.replace(/\b64-bit\b/g, "steam powered");
	
	textNode.nodeValue = v;
}


