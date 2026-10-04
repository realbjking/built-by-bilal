const ICONS = {"shopify": {"p": "M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z", "h": "#7AB55C"}, "wordpress": {"p": "M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0", "h": "#21759B"}, "claude": {"p": "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z", "h": "#D97757"}, "googlegemini": {"p": "M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81", "h": "#8E75B2"}, "google": {"p": "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z", "h": "#4285F4"}, "googleads": {"p": "M3.9998 22.9291C1.7908 22.9291 0 21.1383 0 18.9293s1.7908-3.9998 3.9998-3.9998 3.9998 1.7908 3.9998 3.9998-1.7908 3.9998-3.9998 3.9998zm19.4643-6.0004L15.4632 3.072C14.3586 1.1587 11.9121.5028 9.9988 1.6074S7.4295 5.1585 8.5341 7.0718l8.0009 13.8567c1.1046 1.9133 3.5511 2.5679 5.4644 1.4646 1.9134-1.1046 2.568-3.5511 1.4647-5.4644zM7.5137 4.8438L1.5645 15.1484A4.5 4.5 0 0 1 4 14.4297c2.5597-.0075 4.6248 2.1585 4.4941 4.7148l3.2168-5.5723-3.6094-6.25c-.4499-.7793-.6322-1.6394-.5878-2.4784z", "h": "#4285F4"}, "meta": {"p": "M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z", "h": "#0467DF"}, "tiktok": {"p": "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z", "h": "#000000"}, "whatsapp": {"p": "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z", "h": "#25D366"}, "googlesearchconsole": {"p": "M8.548 1.156L6.832 2.872v1.682h1.716zm0 3.398v.035H6.832v-.035H3.386L0 7.844v3.577h2.826V8.94c0-.525.429-.954.954-.954h16.476c.525 0 .954.43.954.954v2.48h2.754V7.844l-3.386-3.29H17.3v.035h-1.717v-.035zm7.035 0H17.3V2.872l-1.717-1.716zM8.679 1.188V2.84h6.773V1.188zm11.471 7.07a.834.834 0 00-.132.01l-.543.002c-5.216.014-10.432-.008-15.648.01-.435-.063-.794.436-.716.883v2.264h17.812c-.016-.888.045-1.782-.034-2.666-.104-.342-.427-.502-.739-.502zm-15.422.634a.689.698 0 01.689.698.689.698 0 01-.689.697.689.698 0 01-.688-.697.689.698 0 01.688-.698zm2.134 0a.689.698 0 01.689.698.689.698 0 01-.689.697.689.698 0 01-.688-.697.689.698 0 01.688-.698zM.036 11.645v9.156c0 1.05.858 1.908 1.907 1.908h.883V11.645zm21.174 0v11.064h.882c1.05 0 1.908-.858 1.908-1.908v-9.156zM4.057 13.133v6.85h6.137v-6.85zm13.243.021v3.777l-1.708.977-1.708-.977v-3.758a4.006 4.006 0 000 7.23v2.441h3.457v-2.442a4.006 4.006 0 00-.041-7.248zm-13.243 8.26v1.43h7.925v-1.43z", "h": "#458CF5"}, "samsung": {"p": "M19.8166 10.2808l.0459 2.6934h-.023l-.7793-2.6934h-1.2837v3.3925h.8481l-.0458-2.785h.023l.8366 2.785h1.2264v-3.3925zm-16.149 0l-.6418 3.427h.9284l.4699-3.1175h.0229l.4585 3.1174h.9169l-.6304-3.4269zm5.1805 0l-.424 2.6132h-.023l-.424-2.6132H6.5788l-.0688 3.427h.8596l.023-3.0832h.0114l.573 3.0831h.8711l.5731-3.083h.023l.0228 3.083h.8596l-.0802-3.4269zm-7.2664 2.4527c.0343.0802.0229.1949.0114.2522-.0229.1146-.1031.2292-.3324.2292-.2177 0-.3438-.126-.3438-.3095v-.3323H0v.2636c0 .7679.6074.9971 1.2493.9971.6189 0 1.1346-.2178 1.2149-.7794.0458-.298.0114-.4928 0-.5616-.1605-.722-1.467-.9283-1.5588-1.3295-.0114-.0688-.0114-.1375 0-.1834.023-.1146.1032-.2292.3095-.2292.2063 0 .321.126.321.3095v.2063h.8595v-.2407c0-.745-.6762-.8596-1.1576-.8596-.6074 0-1.1117.2063-1.2034.7564-.023.149-.0344.2866.0114.4585.1376.7106 1.364.9169 1.5358 1.3524m11.152 0c.0343.0803.0228.1834.0114.2522-.023.1146-.1032.2292-.3324.2292-.2178 0-.3438-.126-.3438-.3095v-.3323h-.917v.2636c0 .7564.596.9857 1.2379.9857.6189 0 1.1232-.2063 1.2034-.7794.0459-.298.0115-.4814 0-.5616-.1375-.7106-1.4327-.9284-1.5243-1.318-.0115-.0688-.0115-.1376 0-.1835.0229-.1146.1031-.2292.3094-.2292.1948 0 .321.126.321.3095v.2063h.848v-.2407c0-.745-.6647-.8596-1.146-.8596-.6075 0-1.1004.1948-1.192.7564-.023.149-.023.2866.0114.4585.1376.7106 1.341.9054 1.513 1.3524m2.8882.4585c.2407 0 .3094-.1605.3323-.2522.0115-.0343.0115-.0917.0115-.126v-2.533h.871v2.4642c0 .0688 0 .1948-.0114.2292-.0573.6419-.5616.8482-1.192.8482-.6303 0-1.1346-.2063-1.192-.8482 0-.0344-.0114-.1604-.0114-.2292v-2.4642h.871v2.533c0 .0458 0 .0916.0115.126 0 .0917.0688.2522.3095.2522m7.1518-.0344c.2522 0 .3324-.1605.3553-.2522.0115-.0343.0115-.0917.0115-.126v-.4929h-.3553v-.5043H24v.917c0 .0687 0 .1145-.0115.2292-.0573.6303-.596.8481-1.2034.8481-.6075 0-1.1461-.2178-1.2034-.8481-.0115-.1147-.0115-.1605-.0115-.2293v-1.444c0-.0574.0115-.172.0115-.2293.0802-.6419.596-.8482 1.2034-.8482s1.1347.2063 1.2034.8482c.0115.1031.0115.2292.0115.2292v.1146h-.8596v-.1948s0-.0803-.0115-.1261c-.0114-.0802-.0802-.2521-.3438-.2521-.2521 0-.321.1604-.3438.2521-.0115.0458-.0115.1032-.0115.1605v1.5702c0 .0458 0 .0916.0115.126 0 .0917.0917.2522.3323.2522", "h": "#1428A0"}, "instagram": {"p": "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077", "h": "#FF0069"}};
const TOOL_URL="https://business-validation-kit.vercel.app/";
const NUM="923344399998", EMAIL="socialmediapakistanhr@gmail.com";
const waLink = t => `https://wa.me/${NUM}?text=${encodeURIComponent(t)}`;
const svgIcon=(k,col)=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="${col||ICONS[k].h}" d="${ICONS[k].p}"/></svg>`;
const WAICON=`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="${ICONS.whatsapp.p}"/></svg>`;
const RM = matchMedia("(prefers-reduced-motion:reduce)").matches;

/* ---------- DATA ---------- */
const P = [
 ["aggc","AG&C Pvt Ltd","Pharmaceutical Distribution","Healthcare & pharma","https://aligohar.com/","#0F766E","AG"],
 ["alnajam","Alnajam International","Recruitment Agency, KSA & Gulf Region","Education, visas & recruitment","https://www.alnajam.com/","#0B3B8C","AN"],
 ["qadri","Qadri Health Co","Medical & Orthopedic Equipment Manufacturer","Healthcare & pharma","https://share.google/aimode/rZ7ANDk41a9wESbQ0","#1D6FB8","QH"],
 ["aimtex","Aimtex","Tents Manufacturer","Manufacturing & industry","https://aimtex.pk/","#C2410C","AT"],
 ["citytextile","City Textile","Tents Manufacturer","Manufacturing & industry","https://citytextile.com/","#B45309","CT"],
 ["family","Family Hospital","Hospital","Healthcare & pharma",null,"#0E7490","FH"],
 ["biocos","Biocos Cosmetics","Skin Care Products Manufacturer","Fashion, beauty & lifestyle","https://www.biocospk.com/","#BE185D","BC"],
 ["leads","Lahore Leads University","University","Education, visas & recruitment","https://leads.edu.pk/","#1E3A8A","LL"],
 ["islamic","Islamic Honey Center","Honey & Herbal Products Manufacturer","Honey & herbal products","https://islamichoney.com/","#B7791F","IH"],
 ["stylefoam","Style Foam","PU Foam & Furniture Manufacturer","Manufacturing & industry","https://stylefoam.pk/","#E11D48","SF"],
 ["bakestan","Bakestan","Customized Cakes Manufacturer","Food & restaurants","https://www.instagram.com/bakestanofficial/","#8B4513","BK"],
 ["nadeem","Nadeem Restaurant","Restaurant & Buffet","Food & restaurants","https://nadeemrestaurant.com/","#7F1D1D","NR"],
 ["chandni","Chandni Chowk","Restaurant & Buffet","Food & restaurants","https://chandnichowk.pk/","#9A3412","CC"],
 ["forks","Fork & Knives","Pizza & Fast Food","Food & restaurants","https://www.forksnknives.pk/","#F59E0B","FK"],
 ["psl","PSL","Pakistan Super League","Sports & entertainment",null,"#5B21B6","PSL","inf"],
 ["kashmir","Kashmir Beats","Singing Season","Sports & entertainment",null,"#7E22CE","KB","inf"],
 ["samsung","Samsung","Official Experience Store, Fortress Stadium Lahore","Electronics & appliances","https://share.google/O5feJiZdkKttu2Rrv","#1428A0","SM"],
 ["ditron","Ditron","Electronics & Home Appliances Manufacturer","Electronics & appliances","https://ditronelectronics.com/","#0369A1","DT"],
 ["farooq","Farooq Electronics","Electronics & Home Appliances Outlet","Electronics & appliances","https://farooq-electronics.myshopify.com/","#15803D","FE"],
 ["tinny","Tinny Tikes","Kids Leftover Branded Garments Outlet","Fashion, beauty & lifestyle","https://tinytikes.pk/","#F97316","TT"],
 ["emaan","Emaan Dental & Esthetics","Esthetics & Dental Clinic","Healthcare & pharma",null,"#0891B2","ED"],
 ["zaryan","Zaryan Food","Spices","Food & restaurants",null,"#DC2626","ZF"],
 ["almode","Al-Mode Shoes","Shoes Manufacturer","Fashion, beauty & lifestyle","https://almodeshop.com/","#374151","AM"],
 ["ecs","ECS — Ehsan Chapal Store","Shoes Manufacturer","Fashion, beauty & lifestyle","https://shopecs.com/","#B91C1C","ECS"],
 ["smart","Smart Apartments","Rental Apartments / Hotel","Travel, hospitality & rentals","https://www.instagram.com/smartapartmentslahore/","#0D9488","SA"],
 ["cigar","Cigar.pk","Cigars Seller","Cigar lounges & retail","https://cigar.pk/","#5C3A21","CP"],
 ["pcc","Pakistan Cigar Club","Cigars Lounge","Cigar lounges & retail","https://pakistancigarclub.com/","#44301F","PCC"],
 ["steak","Steak Away","Steaks & Food Restaurant","Food & restaurants","https://www.steakaway.pk/","#991B1B","SA","inf"],
 ["nuevo","Nuevo Solar","Solar Solutions Manufacturer","Manufacturing & industry","https://nuevo.pk/","#EAB308","NS"],
 ["hair","Hair Skill","Hair Transplant Clinic","Healthcare & pharma","https://www.instagram.com/hairskillclinic/","#2563EB","HS"],
 ["rsvibe","RS Vibe","Perfumes Manufacturer & Clothing","Fashion, beauty & lifestyle","https://www.rsvibe.com/","#7C3AED","RS"],
 ["panache","Panache","Luxury Suiting","Fashion, beauty & lifestyle","https://panacheonline.pk/","#1F2937","PN"],
 ["wildbee","Wild Bee Honey","Honey Seller, UAE","Honey & herbal products","https://wildbeehoney.ae/","#D97706","WB"],
 ["nonstop","Nonstop Travel Tourism","UAE Travel & Tourism","Travel, hospitality & rentals","https://www.instagram.com/nonstop_tourism_events/","#0EA5E9","NT"],
 ["study2uni","Study2Uni","Study Visa Consultancy Firm","Education, visas & recruitment","https://study2uni.com/","#4338CA","S2U"],
 ["applyvisas","Apply Visas","Visa Consultancy, UK","Education, visas & recruitment","https://applyvisas.co.uk/","#0F766E","AV"],
 ["ranabaig","RanaBaig Law Firm","Law Firm, UK","Legal & charity","https://ranabaiglawfirm.com/","#1E293B","RB"],
 ["charity","Charity4Humanity","Charity Organization, UK","Legal & charity","https://charity4humanity.org/","#16A34A","C4H"],
 ["solicitors","Solicitors Chambers","Law Firm, UK","Legal & charity",null,"#334155","SC"],
 ["syb","SYB Business Ecosystem","Marketing Agency & Software House","Agency & software","https://sybecosystem.com/","#4F46E5","SYB"],
 ["discountoye","Discountoye.pk","Mobiles & Electronics","Electronics & appliances","https://discountoye.pk/","#DC2626","DO"]
].map(a=>({id:a[0],name:a[1],cat:a[2],group:a[3],url:a[4],c:a[5],ini:a[6],mode:a[7]||"full"}));
P.find(p=>p.id==="samsung").icon="samsung";   /* real logo available; add logo:"data:image/..." to any brand for its official artwork */
const GROUPS=[...new Set(P.map(p=>p.group))];

const FULL=[
 ["Website","Designed and built the brand's website."],
 ["Social media handles","Ran the brand's social media accounts end to end."],
 ["Posts and creatives","Designed the social media posts."],
 ["Video and TVCs","Shot the brand videos and TV commercials."],
 ["Editing","Edited all video content."],
 ["Product shoots","Shot the product photography."],
 ["Ideas and concepts","Originated the campaign and content ideas."],
 ["Paid ads","Set up and ran the ads."],
 ["Stalls and exhibitions","Organised the stalls and exhibitions."],
 ["Hiring and interviews","Hired staff and conducted the interviews."]];
const INF=[
 ["Influencer management","Managed the influencers working on the brand."],
 ["Content management","Managed the content produced for the brand."]];

/* skills: [name, level, description] */
const SK=[
 {g:"Marketing",d:"Strategy, paid media and growth, built on 12+ years of live campaigns.",i:[
  ["Social Media Marketing","Pro","Page setup, content calendars, posting, community replies and growth across Facebook, Instagram, TikTok and YouTube."],
  ["Digital Marketing","Pro","Planning and running search, social and website campaigns as one connected plan."],
  ["Funnels","Pro","Mapping the path from first view to enquiry or sale, and fixing the points where people drop off."],
  ["Performance Marketing","Pro","Paid campaigns built around measurable targets such as leads, sales and cost per result."],
  ["SEO","Pro","On-page, off-page and technical SEO to bring in search traffic."],
  ["Influencer Marketing","Pro","Choosing influencers, briefing them, managing their content and tracking delivery."],
  ["Media Buying","Pro","Planning budgets and placements across Meta, Google and TikTok."],
  ["Brand Strategy","Pro","Positioning, messaging, tone and visual direction for a brand."],
  ["Deep Analytics","Advanced","Reading ad, website and social data to decide what to scale, change or stop."],
  ["Reporting","Pro","Clear, regular reports for clients and management."]]},
 {g:"Creative production",d:"Everything on camera, on screen and on the web, produced in-house.",i:[
  ["Photography","Pro","Product, brand and event photography."],
  ["Video Making","Pro","Concepts, scripts, shoots and TV commercials."],
  ["Video Editing","Pro","Reels, ads and long-form edits with sound and motion graphics."],
  ["Website Development","Pro","Shopify and WordPress websites built around the brand and its conversions."]]},
 {g:"Field work and people",d:"On-ground execution and the teams that deliver it.",i:[
  ["Stalls & Exhibitions Management","Pro","Planning, design, staffing and running of stalls and exhibition spaces."],
  ["Brand Activations","Pro","On-ground campaigns that put a brand in front of people."],
  ["Team Management","Pro","Leading in-house teams and freelancers and keeping work on schedule."],
  ["Ushers Management","Pro","Recruiting, briefing and managing ushers for events."],
  ["Human Resource","Pro","Staffing plans, onboarding and day-to-day people management."],
  ["Hiring","Pro","Finding and selecting staff for marketing, sales and event roles."],
  ["Interviewing","Pro","Structured interviews to judge skills and fit."]]},
 {g:"Business and AI",d:"Judging ideas and putting generative AI to work.",i:[
  ["Business Idea Evaluation","Advanced","Testing an idea's market, competition and viability before money is spent."],
  ["Industry and Niche Research","Advanced","10+ industries and niches studied in depth."],
  ["Generative AI","Advanced","Using AI for content, images, video and everyday workflows."],
  ["Advanced Prompting","Advanced","Writing structured prompts that give consistent, usable results."],
  ["LLM Training","Advanced","Training and shaping language models for specific business tasks."]]}];
const SKN=SK.reduce((n,g)=>n+g.i.length,0);

/* tools: [name, mark, description]; mark = {t,fg,bg} lettermark or {i} icon */
const TL=[
 {g:"Design and video",i:[
  ["Adobe Photoshop",{t:"Ps",fg:"#31A8FF",bg:"#001E36"},"Retouching, compositing and ad and social creatives."],
  ["Adobe Illustrator",{t:"Ai",fg:"#FF9A00",bg:"#330000"},"Logos, vector artwork and layouts."],
  ["Adobe Premiere Pro",{t:"Pr",fg:"#9999FF",bg:"#00005B"},"Editing for TVCs, reels and ads."],
  ["Adobe After Effects",{t:"Ae",fg:"#9999FF",bg:"#00005B"},"Motion graphics and video effects."],
  ["Adobe Audition",{t:"Au",fg:"#00E4BB",bg:"#00241D"},"Audio cleaning and mixing."],
  ["Adobe Lightroom",{t:"Lr",fg:"#31A8FF",bg:"#001E36"},"Colour grading for product and brand photography."],
  ["InPage Urdu",{t:"Ip",fg:"#FFFFFF",bg:"#C2410C"},"Urdu typesetting and layouts."]]},
 {g:"Website development",i:[
  ["Shopify",{i:"shopify"},"Online stores and e-commerce setup."],
  ["WordPress",{i:"wordpress"},"Business websites and content management."]]},
 {g:"AI tools",i:[
  ["ChatGPT",{t:"GPT",fg:"#FFFFFF",bg:"#10A37F"},"Writing, research and workflow prompts."],
  ["Claude",{i:"claude"},"Long-form work, analysis and building."],
  ["Gemini",{i:"googlegemini"},"Research and multimodal work."],
  ["HeyGen",{t:"Hg",fg:"#FFFFFF",bg:"#6D28D9"},"AI avatar and presenter videos."],
  ["Higgsfield",{t:"Hf",fg:"#D1FE17",bg:"#111111"},"AI video and cinematic motion."],
  ["Grok",{t:"Gk",fg:"#FFFFFF",bg:"#000000"},"Research and quick ideation."],
  ["Veo 3",{t:"V3",fg:"#FFFFFF",bg:"#4285F4"},"AI video generation with sound."],
  ["Google Flow",{t:"Fl",fg:"#FFFFFF",bg:"#34A853"},"AI filmmaking and scene building."],
  ["Sora",{t:"So",fg:"#FFFFFF",bg:"#18181B"},"AI video generation."]]},
 {g:"Ads management",i:[
  ["Meta Ads",{i:"meta"},"Facebook and Instagram campaigns."],
  ["Google Ads",{i:"googleads"},"Search and display campaigns."],
  ["TikTok Ads",{i:"tiktok",bg:"#FFFFFF"},"Short-video ad campaigns."]]},
 {g:"SEO",i:[
  ["On-page SEO",{t:"On",fg:"#FFFFFF",bg:"#2563EB"},"Page content, titles and structure."],
  ["Off-page SEO",{t:"Off",fg:"#FFFFFF",bg:"#7C3AED"},"Backlinks and authority building."],
  ["Technical SEO",{i:"googlesearchconsole"},"Speed, crawling and indexing."]]}];
const TLN=TL.reduce((n,g)=>n+g.i.length,0);
const toolLevel=g=>g==="AI tools"?"Advanced":"Pro";
