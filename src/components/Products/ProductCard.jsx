import {useState} from "react";
import {ExternalLink, Heart} from "lucide-react";

function ProductCard({product}) {
    const {name, price, originalPrice, store, image} = product;

    // State to track if the heart is filled
    const [isFavorite, setIsFavorite] = useState(false);

    // Toggle favorite state
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
            <div className="flex gap-3">
                <img
                    src={image}
                    alt={name}
                    className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-1">
                    <div className="flex items-start justify-between">
                        <h3 className="font-medium text-gray-800">{name}</h3>
                        <Heart
                            className={`w-5 h-5 cursor-pointer ${
                                isFavorite ? "text-red-500" : "text-gray-400"
                            }`}
                            onClick={toggleFavorite}
                        />
                    </div>
                    <p className="text-sm text-gray-500">{store}</p>
                    <div className="mt-2">
                        <span className="text-lg font-semibold text-[#ff66c4]">
                            {price}
                        </span>
                    </div>
                    <button className="mt-2 text-sm text-yellow-500 flex items-center gap-1 hover:text-orange-400">
                        <ExternalLink className="w-4 h-4" />
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
